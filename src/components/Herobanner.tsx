"use client";
import "./grid.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full py-28 mt-20 overflow-hidden bg-black">

      {/* شبكة ذهبية متحركة */}
      <div className="gold-grid absolute inset-0 pointer-events-none z-0"></div>

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 text-center md:text-right">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 leading-snug mb-6">
            طوّر مهاراتك مع <span className="text-gray-300">ITX CENTER</span>  بأفضل الدورات التدريبية
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto md:mx-0">
          TRAINING & LEARNING CENTER
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/Group.png"
            width={430}
            height={430}
            alt="Hero"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
