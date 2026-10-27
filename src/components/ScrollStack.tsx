'use client';

import React, { Children, Fragment, isValidElement, useLayoutEffect, useEffect, useRef } from 'react';
import './ScrollStack.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const resolveOffset = (value: string | number, size: number) => {
  if (typeof value === 'number') return value;
  const text = String(value).trim();
  if (text.endsWith('%')) return (parseFloat(text) / 100) * size;
  return parseFloat(text) || 0;
};

const toLength = (value: string | number) => (typeof value === 'number' ? `${value}px` : value);

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '', style }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()} style={style}>
    {children}
    <span className="scroll-stack-card__shade" aria-hidden="true" />
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  itemScale?: number;
  baseScale?: number;
  dimAmount?: number;
  blurAmount?: number;
  tiltAmount?: number;
  rotationAmount?: number;
  holdDistance?: number;
  smoothScroll?: boolean;
  snap?: boolean;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemStackDistance = 24,
  stackPosition = '15%',
  itemScale = 0.035,
  baseScale = 0.88,
  dimAmount = 0.18,
  blurAmount = 0,
  tiltAmount = 0,
  rotationAmount = 0,
  holdDistance = 300,
  smoothScroll = false,
  snap = false,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<any>(null);
  const items = Children.toArray(children);

  useIsomorphicLayoutEffect(() => {
    settingsRef.current = {
      itemDistance,
      itemStackDistance,
      stackPosition,
      itemScale,
      baseScale,
      dimAmount,
      blurAmount,
      tiltAmount,
      rotationAmount,
      holdDistance,
      smoothScroll,
      snap,
      onStackComplete,
    };
  });

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    const end = endRef.current;
    if (!root || !inner || !end) return undefined;

    const windowed = useWindowScroll;
    const target: Window | HTMLDivElement = windowed ? window : root;
    let frameId = 0;
    let complete = false;

    // Cache style values to skip unnecessary DOM updates
    const cardTransforms: string[] = [];
    const cardDims: string[] = [];

    // Cache layout dimensions so they are NOT measured on every scroll
    let cachedHeights: number[] = [];
    let cachedViewHeight = 0;
    let cachedStackTop = 0;
    let cachedOffset = itemStackDistance;

    const measureLayout = () => {
      const settings = settingsRef.current;
      const slots = Array.from(inner.children).filter((child) =>
        (child as HTMLElement).hasAttribute('data-stack-slot')
      ) as HTMLElement[];
      if (!settings || !slots.length) return;

      cachedViewHeight = windowed ? window.innerHeight : root.clientHeight;
      cachedStackTop = resolveOffset(settings.stackPosition, cachedViewHeight);
      cachedOffset = settings.itemStackDistance;
      cachedHeights = slots.map((slot) => slot.offsetHeight);

      const lastPin = cachedStackTop + (slots.length - 1) * cachedOffset;
      const padTop = windowed ? 0 : cachedStackTop;
      const endHeight =
        settings.holdDistance +
        (windowed
          ? 0
          : Math.max(0, cachedViewHeight - lastPin - (cachedHeights[cachedHeights.length - 1] || 0)));

      inner.style.paddingTop = `${padTop}px`;
      end.style.height = `${endHeight}px`;

      renderStack();
    };

    const renderStack = () => {
      frameId = 0;
      const settings = settingsRef.current;
      const slots = Array.from(inner.children).filter((child) =>
        (child as HTMLElement).hasAttribute('data-stack-slot')
      ) as HTMLElement[];
      if (!settings || !slots.length || !cachedHeights.length) return;

      const viewTop = windowed ? 0 : root.getBoundingClientRect().top + root.clientTop;
      const stackTop = cachedStackTop;
      const offset = cachedOffset;
      const heights = cachedHeights;

      // Batched read: get all bounding tops in one pass
      const tops = slots.map((slot) => slot.getBoundingClientRect().top);

      // Compute coverage depths
      const depths = new Array(slots.length).fill(0);
      let lastCover = 0;

      for (let j = 1; j < slots.length; j++) {
        const pinBefore = viewTop + stackTop + (j - 1) * offset;
        const start = pinBefore + (heights[j - 1] || 0);
        const span = Math.max(1, start - pinBefore - offset);
        const cover = Math.min(1, Math.max(0, (start - tops[j]) / span));
        for (let i = 0; i < j; i++) {
          depths[i] += cover;
        }
        lastCover = cover;
      }

      const dimStep = Math.min(Math.max(settings.dimAmount, 0), 1);

      // Batched write: update card transforms and dimming
      for (let i = 0; i < slots.length; i++) {
        const slot = slots[i];
        const card = slot.firstElementChild as HTMLElement | null;
        if (!card) continue;

        const depth = depths[i];
        const scale = Math.max(settings.baseScale, 1 - depth * settings.itemScale);
        const dim = 1 - Math.pow(1 - dimStep, depth);

        // Hardware-accelerated 2D scale with 3D translation anchor
        const transform =
          depth < 0.0008
            ? 'translate3d(0,0,0)'
            : `translate3d(0,0,0) scale(${scale.toFixed(4)})`;

        if (cardTransforms[i] !== transform) {
          cardTransforms[i] = transform;
          card.style.transform = transform;
        }

        const dimStr = dim.toFixed(3);
        if (cardDims[i] !== dimStr) {
          cardDims[i] = dimStr;
          card.style.setProperty('--scroll-stack-dim', dimStr);
        }
      }

      const done = slots.length > 1 && lastCover >= 0.999;
      if (done !== complete) {
        complete = done;
        if (done) settings.onStackComplete?.();
      }
    };

    const scheduleRender = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(renderStack);
      }
    };

    // Initial layout setup
    measureLayout();

    // Event listeners
    let resizeTimer: number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(measureLayout, 100);
    };

    window.addEventListener('resize', onResize, { passive: true });
    target.addEventListener('scroll', scheduleRender, { passive: true });

    // Sync with global Lenis smooth scrolling for 120fps sync
    const lenisInstance = typeof window !== 'undefined' ? (window as any).__lenis : null;
    if (windowed && lenisInstance) {
      lenisInstance.on('scroll', scheduleRender);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      target.removeEventListener('scroll', scheduleRender);
      if (windowed && lenisInstance) {
        lenisInstance.off?.('scroll', scheduleRender);
      }
    };
  }, [useWindowScroll, itemDistance, itemStackDistance]);

  return (
    <div
      ref={rootRef}
      className={`scroll-stack ${useWindowScroll ? 'scroll-stack--window' : 'scroll-stack--contained'} ${className}`.trim()}
    >
      <div ref={innerRef} className="scroll-stack__inner">
        {items.map((child, index) => {
          const gap = itemDistance - (items.length - index) * itemStackDistance;
          return (
            <Fragment key={isValidElement(child) ? (child.key ?? index) : index}>
              {index > 0 && (
                <div aria-hidden="true" style={{ height: Math.max(0, gap), marginTop: Math.min(0, gap) }} />
              )}
              <div
                data-stack-slot=""
                className="scroll-stack__slot"
                style={{
                  top: `calc(${toLength(stackPosition)} + ${index * itemStackDistance}px)`,
                  marginBottom: (items.length - 1 - index) * itemStackDistance,
                  zIndex: index + 1,
                }}
              >
                {child}
              </div>
            </Fragment>
          );
        })}
        <div ref={endRef} className="scroll-stack__end" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ScrollStack;
