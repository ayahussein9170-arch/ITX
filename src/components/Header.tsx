"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-b border-yellow-600/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image 
            src="/itx-logo.png" 
            alt="ITX Center" 
            width={58} 
            height={58} 
            className="rounded-full shadow-[0_0_12px_rgba(255,215,0,0.3)]"
          />
          <h1 className="text-2xl font-bold tracking-wide text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
            ITX CENTER
          </h1>
        </div>

        {/* بدون صفحات → فقط زر القائمة إذا احتجت مستقبلاً */}
        {/* <div className="md:hidden text-white text-3xl">☰</div> */}

      </div>
    </header>
  );
}
