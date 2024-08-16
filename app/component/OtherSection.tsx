import AnimateComponent from "@/app/component/shared/AnimateComponent";
import { ContentData } from "./type";

// components/CostAndFooter.js
export default function OtherSection({ data }: { data: ContentData }) {
  return (
    <AnimateComponent as="section" className="py-16 px-4 bg-white text-gray-800 overflow-visible">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{data?.title || 'Other'}</h2>
        {data?.content && (
          <p className="text-center text-lg">{data?.content}</p>
        )}
      </div>
    </AnimateComponent>
  );
}
