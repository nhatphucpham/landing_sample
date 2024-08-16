import AnimateComponent from "@/app/component/shared/AnimateComponent";
import { ContentData } from "./type";

// components/CourseIntro.js
export default function CourseIntro({ data }: { data: ContentData }) {
  return (
    <AnimateComponent as="section" className="py-16 px-4 bg-gray-200 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{data?.title || 'Giới thiệu về Khóa học của chúng tôi'}</h2>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-lg text-justify whitespace-pre-wrap">
              {data?.content || 'Khóa học của chúng tôi cung cấp một cái nhìn sâu sắc về thế giới công nghệ hấp dẫn. Hãy tham gia để học từ các chuyên gia ngành và nâng cao sự nghiệp của bạn.'}
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <video controls className="w-full rounded-lg">
              <source src="/path/to/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </AnimateComponent>
  );
}
