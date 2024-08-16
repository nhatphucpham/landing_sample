import Hero from "@/app/component/Hero";
import CourseIntro from "@/app/component/CourseIntro";
import GoalsAndInstructors from "@/app/component/GoalsAndInstructors";
import RegistrationForm from "@/app/component/RegistrationForm";
import OtherSection from "@/app/component/OtherSection";
import { getLandingContents } from "./data";

export default async function Home({ searchParams }: { searchParams: any }) {
  const [hero, intro, goal, instructor, ...other] = await getLandingContents();

  return (
    <div className="mx-0 px-0">
      <Hero data={hero} />
      <div className="mx-auto">
        <CourseIntro data={intro} />
        <GoalsAndInstructors data={{ goal, instructor }} />
        <RegistrationForm />
        <OtherSection data={other[0]} />
      </div>
    </div>
  );
}
