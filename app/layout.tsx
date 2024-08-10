import type { Metadata } from "next";

import Header from "@/app/component/shared/Header";
import Footer from "@/app/component/shared/Footer";
import Notification from "@/app/component/shared/Notification";

import "./globals.css";
import MenuButton from "./component/shared/MenuButton/MenuButton";

export const metadata: Metadata = {
  title: "Mấy anh Culi",
  description: "Trang web chia sẻ kiến thức về lập trình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vn">
      <body className="bg-gray-800 text-white">
        <Header>
          <MenuButton>
              <a href="/#" className="mx-4 hover:underline primary-color-text">Trang chủ</a>
              <a href="/#register" className="mx-4 hover:underline primary-color-text">Đăng Ký</a>
              <a href="#" className="mx-4 hover:underline primary-color-text">Dùng thử</a>
              <a href="/login" className="mx-4 hover:underline primary-color-text">Đăng nhập</a>
          </MenuButton>
        </Header>
        <Notification />
        {children}
        <Footer />
      </body>
    </html >
  );
}
