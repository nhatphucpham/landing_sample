import AnimateComponent from "@/app/component/shared/AnimateComponent";

// components/CostAndFooter.js
export default function Cost() {
  return (
    <AnimateComponent as="section" className="py-16 px-4 bg-white text-gray-800 overflow-visible">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Chi phí khóa học</h2>
        <p className="text-center text-lg">Khóa học có giá $499, bao gồm tất cả tài liệu và truy cập vào tài nguyên trực tuyến.</p>
      </div>
    </AnimateComponent>
  );
}
