import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-black mb-4 font-['Futura_ND_Condensed']">404</h1>
      <p className="text-xl text-neutral-400 mb-8 font-light">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-[#00BAE2] text-black font-bold text-sm tracking-wide uppercase hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
