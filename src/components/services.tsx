"use client";
import React from "react";
import { 
  FaMoneyCheckAlt, 
  FaLanguage, 
  FaLaptop, 
  FaPalette, 
  FaUsers 
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaMoneyCheckAlt className="text-6xl text-yellow-400 drop-shadow-lg" />,
      title: "دورات الاقتصاد والمحاسبة",
      items: ["برامج محاسبية"],
    },
    {
      icon: <FaLanguage className="text-6xl text-yellow-400 drop-shadow-lg" />,
      title: "دورات المحادثة وتعليم اللغات",
      items: ["إنكليزي", "فرنسي", "ألماني", "……"],
    },
    {
      icon: <FaPalette className="text-6xl text-yellow-400 drop-shadow-lg" />,
      title: "دورات مجموعة أدوبي",
      items: ["تصميم إلّـي", "غرافيك", "مونتاج فيديو", "تصميم مواقع"],
    },
    {
      icon: <FaUsers className="text-6xl text-yellow-400 drop-shadow-lg" />,
      title: "دورات التنمية البشرية",
      items: ["TOT", "HR", "مهارات التواصل"],
    },
    {
      icon: <FaLaptop className="text-6xl text-yellow-400 drop-shadow-lg" />,
      title: "دورات في مجال الحاسوب",
      items: ["برمجة", "شبكات", "ICDL", "……"],
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* خلفية ذهبية خفيفة */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern-gold.png')] bg-cover bg-center"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* العنوان */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-yellow-400 mb-4 tracking-wide">
            خدماتنا التدريبية
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من الدورات لتطوير مهاراتك وتحقيق أهدافك المهنية.
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
         
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="
                group
                bg-gradient-to-br from-gray-900 to-black
                p-10 rounded-3xl
                shadow-[0_0_35px_rgba(0,0,0,0.45)]
                border border-yellow-500/20
                transition-all duration-500
                hover:-translate-y-3 
                hover:shadow-[0_0_65px_rgba(255,200,0,0.3)]
                relative overflow-hidden
              "
            >

              {/* طبقة ذهبية ناعمة عند الهوفر */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition duration-500 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>

              {/* الأيقونة */}
              <div className="mb-6 flex justify-center">
                <div className="transform group-hover:scale-110 transition duration-500">
                  {service.icon}
                </div>
              </div>

              {/* العنوان */}
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
                {service.title}
              </h3>

              {/* العناصر */}
              <ul className="text-gray-300 space-y-2 text-center text-lg">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="hover:text-yellow-400 transition duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
