import AnimateComponent from "@/app/component/AnimateComponent";
import Button from "@/app/component/shared/Button";

// components/Hero.js
export default function Hero() {
  return (
    <AnimateComponent className="h-screen pt-24 bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="px-10 py-14 max-w-lg flex flex-col items-start justify-center rounded-r-[35%] bg-gray-800/80 lg:bg-transparent">
        <AnimateComponent as="h1" type="left" className="text-5xl font-bold text-white mb-4">Chào mừng đến với khóa học!</AnimateComponent>
        <AnimateComponent as="p" type="left" className="text-xl text-white mb-8">
          Khám phá tương lai của giáo dục cùng chúng tôi. Đăng ký ngay hôm nay để bắt đầu hành trình học tập đầy hứa hẹn!
        </AnimateComponent>
        <Button animateOptions={{ type: "left" }} text="Đăng ký ngay" className="self-center" />
      </div>
    </AnimateComponent>
  );
}
