"use client";

export default function MapOnly() {
  return (
    <section className="py-20 bg-black text-center text-gray-200">
    <h2 
          className="text-4xl font-bold text-yellow-400 mb-12 text-center"
          data-aos="fade-up"
        >
          موقعنا على الخريطة
        </h2>
      {/* النص فوق الخريطة */}
      <div 
        className="mb-10"
        data-aos="fade-up"
      >
        <h3 className="text-xl md:text-xl font-bold text-white leading-relaxed">
          االقامشلي - أربوية - أربع شوارع - قبل جامع البشير - مقابل معهد إعداد المدرسين (مدرسة تشرين سابقًا)
        </h3>
      </div>

      {/* الخريطة */}
      <div 
        className="w-full max-w-4xl mx-auto h-[450px] rounded-2xl overflow-hidden 
                   border border-yellow-600/30 
                   shadow-[0_0_40px_rgba(255,200,0,0.15)]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49490.174801009416!2d41.24142825!3d37.049036650000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400a0579690ce791%3A0xcc7364779b0bff3f!2z2KfZhNmC2KfZhdi02YTZitiMINiz2YjYsdmK2Kc!5e1!3m2!1sar!2snl!4v1765113255711!5m2!1sar!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
}
