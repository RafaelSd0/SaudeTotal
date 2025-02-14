import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Saude Total",
  description: "Agendar Consultas na Saúde Total",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body>
        <Header/>
        <main className="pt-16">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
