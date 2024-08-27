'use client';
import { useRouter } from 'next/navigation';

import AnimateComponent from "@/app/component/shared/AnimateComponent";
import Button from "@/app/component/shared/Button";
import Image from "next/image";
import { ContentData } from './type';

// components/Hero.js
export default function Hero({ data }: { data: ContentData }) {
  const router = useRouter();

  return (
    <section className="min-h-[48rem] h-screen pt-24 items-stretch bg-cover bg-center hero relative">
      <AnimateComponent as="div" type="left" initialAnimation className="z-10 relative px-10 py-14 max-w-lg flex flex-col items-start justify-center rounded-r-[35%] bg-gray-800/80 lg:bg-transparent">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">{data?.title || 'Chào mừng đến với khóa học!'}</h1>
        <p className="text-xl text-white mb-8">
          {data?.content || 'Khám phá tương lai của giáo dục cùng chúng tôi. Đăng ký ngay hôm nay để bắt đầu hành trình học tập đầy hứa hẹn!'}
        </p>
        <Button animateOptions={{ type: "left" }} text="Nhận tư vấn ngay!" className="self-center" onClick={() => router.push('/login')} />
      </AnimateComponent>
    </section>
  );
}
