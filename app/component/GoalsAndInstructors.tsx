import AnimateComponent from "@/app/component/AnimateComponent";
import Goals from "@/app/component/Goals";
import Instructors from "@/app/component/Instructors";

// components/GoalsAndInstructors.js
export default function GoalsAndInstructors() {
  return (
    <AnimateComponent as="section" className="py-16 px-4 bg-gray-800 text-white">
      <div className="container mx-auto flex">
        <Goals />
        <Instructors />
      </div>
    </AnimateComponent>
  );
}
