import AnimateComponent from "@/app/component/shared/AnimateComponent";
import Goals from "@/app/component/Goals";
import Instructors from "@/app/component/Instructors";

// components/GoalsAndInstructors.js
export default function GoalsAndInstructors() {
  return (
    <AnimateComponent as="section" className="py-16 bg-gray-800 text-white">
      <div className="mx-auto flex flex-wrap">
        <Goals className="shrink-0" />
        <Instructors className="shrink-0" />
      </div>
    </AnimateComponent>
  );
}
