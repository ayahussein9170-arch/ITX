import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/footer";
import AOSWrapper from "../components/AOSWrapper";

export const metadata: Metadata = {
  title: "ITX CENTER",
  description: "مركز تدريبي احترافي",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-black text-white overflow-x-hidden relative">
        <AOSWrapper>
          <Header />
          <main className="relative z-10 min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
