import Hero from "@/app/component/Hero";
import CourseIntro from "@/app/component/CourseIntro";
import GoalsAndInstructors from "@/app/component/GoalsAndInstructors";
import RegistrationForm from "@/app/component/RegistrationForm";
import Cost from "@/app/component/Cost";

export default function Home() {

  return (
    <div className="mx-0 px-0">
      <Hero />
      <div className="container mx-auto px-4">
        <CourseIntro />
        <GoalsAndInstructors />
        <RegistrationForm />
        <Cost />
      </div>
    </div>
  );
}
