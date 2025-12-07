"use client";
import { FaGlobe, FaHome, FaChild, FaChalkboardTeacher } from "react-icons/fa";

export default function ReachSection() {
  return (
    <section className="py-20 bg-black text-gray-200">
      <div className="container mx-auto px-6 text-center">

        {/* العنوان الرئيسي */}
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          أينما كنت… نصل إليك
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          لأننا نؤمن بأن التعلم لا يحدّه مكان ولا زمان، يوفر ITX CENTER
          خدمات تعليمية مرنة تشمل الأونلاين والقاعات التعليمية المخصصة،
          لضمان تجربة تعلم مريحة ومتكاملة لجميع الأعمار.
        </p>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

          {/* بطاقة 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500/20 shadow-lg hover:scale-105 transition">
            <FaGlobe className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl text-yellow-400 mb-3 font-semibold">خدمات أونلاين</h3>
            <p className="leading-relaxed text-gray-300">
              تعلّم من أي مكان وفي أي وقت عبر محاضرات مباشرة مع نخبة الأساتذة.
            </p>
          </div>

          {/* بطاقة 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500/20 shadow-lg hover:scale-105 transition">
            <FaHome className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl text-yellow-400 mb-3 font-semibold">تعلّم وأنت في بيتك</h3>
            <p className="leading-relaxed text-gray-300">
              محاضرات مباشرة، دعم مستمر، ومتابعة فورية — كل ذلك دون الحاجة لمغادرة المنزل.
            </p>
          </div>

          {/* بطاقة 3 */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500/20 shadow-lg hover:scale-105 transition">
            <FaChild className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl text-yellow-400 mb-3 font-semibold">برامج مخصصة للأطفال</h3>
            <p className="leading-relaxed text-gray-300">
              قاعات خاصة للأطفال من عمر 7 إلى 12 سنة، مع منهاج مخصص ومدرسين متخصصين.
            </p>
          </div>

          {/* بطاقة إضافية للأطفال */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500/20 shadow-lg hover:scale-105 transition md:col-span-2 lg:col-span-1">
            <FaChalkboardTeacher className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl text-yellow-400 mb-3 font-semibold">تعليم لغات للأطفال</h3>
            <p className="leading-relaxed text-gray-300">
              برامج محادثة للأطفال مع أساتذة متخصصين في تعليم الإنجليزية، الفرنسية والألمانية.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
