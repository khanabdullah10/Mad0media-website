import os
import subprocess
from PIL import Image

cur_dir = os.path.abspath(os.path.dirname(__file__))

# 1. HTML template to render the MAD O MEDIA icon via Chrome
# Sleek dark badge (#0d0e12) with subtle dark border and centered neon logo
svg_markup = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="90 110 260 330" width="370" height="370">
  <defs>
    <filter id="glow-pink" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="glow-orange" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Left Pink Arch of 'M' -->
  <path d="M 119 415 L 119 280 C 119 210 120 160 133 144 C 139 136 146 133 151 133 C 158 133 166 138 174 153 C 185 174 195 208 202 238"
        fill="none" stroke="#FF1458" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-pink)" />

  <!-- Center Orange Play Button -->
  <path d="M 194 256 C 194 246 202 241 210 245 L 267 288 C 274 292 274 300 267 304 L 210 347 C 202 351 194 346 194 336 Z"
        fill="#FF7700" stroke="#FF7700" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-orange)" />

  <!-- Right Blue Loop of 'M' -->
  <path d="M 248 240 C 263 205 285 152 304 140 C 314 133 324 137 329 152 C 334 168 335 210 334 275 C 333 345 332 390 327 407 C 322 419 313 419 304 411 C 291 399 272 366 250 338"
        fill="none" stroke="#0077FF" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-blue)" />
</svg>'''

html_content = f'''<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * {{ box-sizing: border-box; }}
  body {{
    margin: 0;
    padding: 0;
    width: 512px;
    height: 512px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }}
  .icon-bg {{
    width: 512px;
    height: 512px;
    background: radial-gradient(circle at 50% 50%, #15151c 0%, #08080a 100%);
    border-radius: 115px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.08);
  }}
</style>
</head>
<body>
  <div class="icon-bg">
    {svg_markup}
  </div>
</body>
</html>'''

html_file = os.path.join(cur_dir, 'temp_render_favicon.html')
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html_content)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
master_png = os.path.join(cur_dir, 'temp_master_512.png')

cmd = [
    chrome_path,
    '--headless=new',
    '--disable-gpu',
    '--force-device-scale-factor=1',
    '--window-size=512,512',
    '--default-background-color=00000000',
    f'--screenshot={master_png}',
    f'file:///{html_file.replace(os.sep, "/")}'
]

print("Rendering 512x512 master favicon with Chrome...")
subprocess.run(cmd, check=True)

if not os.path.exists(master_png):
    raise FileNotFoundError("Failed to generate master PNG!")

im = Image.open(master_png).convert('RGBA')
print(f"Master image rendered: {im.size}, mode: {im.mode}")

# Crop/resize exactly to 512x512 if necessary
if im.size != (512, 512):
    im = im.resize((512, 512), Image.Resampling.LANCZOS)

# Save master PNGs in public/
public_dir = os.path.join(cur_dir, 'public')
os.makedirs(public_dir, exist_ok=True)

# 1. icon-512.png
im.save(os.path.join(public_dir, 'icon-512.png'), 'PNG')
print("Saved icon-512.png")

# 2. icon-192.png (PWA & Google 48x4 multiple)
im192 = im.resize((192, 192), Image.Resampling.LANCZOS)
im192.save(os.path.join(public_dir, 'icon-192.png'), 'PNG')
print("Saved icon-192.png")

# 3. apple-touch-icon.png (180x180)
im180 = im.resize((180, 180), Image.Resampling.LANCZOS)
im180.save(os.path.join(public_dir, 'apple-touch-icon.png'), 'PNG')
print("Saved apple-touch-icon.png")

# 4. icon-96.png (Google 48x2 multiple)
im96 = im.resize((96, 96), Image.Resampling.LANCZOS)
im96.save(os.path.join(public_dir, 'icon-96.png'), 'PNG')
print("Saved icon-96.png")

# 5. icon-48.png (Google 48px standard)
im48 = im.resize((48, 48), Image.Resampling.LANCZOS)
im48.save(os.path.join(public_dir, 'icon-48.png'), 'PNG')
print("Saved icon-48.png")

# 6. icon-32.png
im32 = im.resize((32, 32), Image.Resampling.LANCZOS)
im32.save(os.path.join(public_dir, 'icon-32.png'), 'PNG')

# 7. icon-16.png
im16 = im.resize((16, 16), Image.Resampling.LANCZOS)
im16.save(os.path.join(public_dir, 'icon-16.png'), 'PNG')

# 8. True Multi-resolution Windows ICO (favicon.ico)
# Embeds 16, 32, 48, 64, 128, 256 sizes
ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
im.save(os.path.join(public_dir, 'favicon.ico'), format='ICO', sizes=ico_sizes)
print("Saved true binary favicon.ico with multi-resolution layers!")

# Clean up temporary files
try:
    os.remove(html_file)
    os.remove(master_png)
except:
    pass

print("Favicon generation completed successfully!")
