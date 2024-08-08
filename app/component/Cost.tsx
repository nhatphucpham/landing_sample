import AnimateComponent from "@/app/component/AnimateComponent";

// components/CostAndFooter.js
export default function Cost() {
  return (
    <AnimateComponent as="section" className="py-16 px-4 bg-white text-gray-800 overflow-visible">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Course Cost</h2>
        <p className="text-center text-lg">The course costs $499, including all materials and access to online resources.</p>
      </div>
    </AnimateComponent>
  );
}
