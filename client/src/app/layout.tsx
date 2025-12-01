import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/variable/woff2/pretendardvariable.woff2"
})

export const metadata: Metadata = {
  title: "개발자 임대인",
  description: "개발자 임대인의 포트폴리오 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <div className="bg"></div>
        {children}
      </body>
    </html>
  );
}
