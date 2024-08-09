'use client';
import { useRouter } from 'next/navigation';

import AnimateComponent from "@/app/component/shared/AnimateComponent";
import Button from "@/app/component/shared/Button";
import Image from "next/image";

// components/Hero.js
export default function Hero() {
  const router = useRouter();

  return (
    <section className="h-screen pt-24 bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <AnimateComponent as="div" type="left" initialAnimation className="z-10 relative px-10 py-14 max-w-lg flex flex-col items-start justify-center rounded-r-[35%] bg-gray-800/80 lg:bg-transparent">
        <h1 className="text-5xl font-bold text-white mb-4">Chào mừng đến với khóa học!</h1>
        <p className="text-xl text-white mb-8">
          Khám phá tương lai của giáo dục cùng chúng tôi. Đăng ký ngay hôm nay để bắt đầu hành trình học tập đầy hứa hẹn!
        </p>
        <Button animateOptions={{ type: "left" }} text="Đăng ký ngay" className="self-center" onClick={() => router.push('/login')} />
      </AnimateComponent>
      <div className="flex justify-center items-center h-full -translate-y-1/2">
        <AnimateComponent type="right" as={Image} initialAnimation width={385} height={856} src="/person.png" alt="person" className="block" />
      </div>
    </section>
  );
}
