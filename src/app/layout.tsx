import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "ITX CENTER",
  description: "مركز تدريبي احترافي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">

      <body className="relative bg-black overflow-x-hidden">
        {/* الهيدر */}
        <Header />

        {/* الصفحات */}
        <main className="relative z-10">
          {children}
        </main>

        {/* الفوتر */}
        <Footer />
      </body>

    </html>
  );
}
