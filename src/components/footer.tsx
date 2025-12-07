"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative overflow-hidden">

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* القسم 1 — معلومات التواصل */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">معلومات التواصل</h3>

          {/* رقم الهاتف */}
          <p className="flex items-center gap-2 mb-3 text-lg">
            <FaPhone className="text-yellow-400" />
            <span>0956517264</span>
          </p>

          {/* العنوان */}
          <p className="flex items-start gap-2 leading-relaxed">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <span>
             القامشلي - أربوية - أربع شوارع - قبل جامع البشير - مقابل معهد إعداد المدرسين (مدرسة تشرين سابقًا)
            </span>
          </p>

          {/* الإدارة */}
          <p className="flex items-center gap-2 mt-4">
            <FaUserTie className="text-yellow-400" />
            <span>بإدارة المهندسة سهى الأحمد</span>
          </p>

          {/* مواقع التواصل */}
          <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://www.facebook.com/qr?id=61584831355589" className="hover:text-yellow-400 transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/itx_center?utm_source=qr&igsh=MW92aG5pdjh5ZWZmMA==" className="hover:text-yellow-400 transition"><FaInstagram /></a>
           
          </div>
        </div>

     

        {/* القسم 3 — تعريف مختصر */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">ITX CENTER</h3>
          <p className="leading-relaxed text-gray-400">
            مركز تدريبي متخصص بتطوير مهاراتك التقنية والمهنية باستخدام أحدث المناهج التدريبية.
          </p>
        </div>
      </div>

      {/* الحقوق */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-6">
        © 2025 ITX CENTER — جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
