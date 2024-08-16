import AnimateComponent from "@/app/component/shared/AnimateComponent";
import Goals from "@/app/component/Goals";
import Instructors from "@/app/component/Instructors";
import { ContentData } from "./type";

interface GoalsAndInstructorsProps {
  data: { [key: string]: ContentData };
}

// components/GoalsAndInstructors.js
export default function GoalsAndInstructors({ data }: GoalsAndInstructorsProps) {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="mx-auto flex flex-wrap md:flex-nowrap">
        <Goals data={data.goal} className="basis-full md:basis-1/2" />
        <Instructors data={data.instructor} className="basis-full md:basis-1/2" />
      </div>
    </section>
  );
}
