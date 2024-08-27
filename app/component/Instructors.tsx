import Image from "next/image";
import { ContentData } from "./type";
import { getImageByLandingContentId } from "../data";
import AnimateComponent from "./shared/AnimateComponent";

interface InstructorsProps {
  className: string;
  data: ContentData;
}
export default async function Instructors({ className, data }: InstructorsProps) {
  const imageData = await getImageByLandingContentId(data.id);

  return (
    <AnimateComponent as="div" className={`${className || ''} container bg-gray-200 text-gray-800 pb-8`}>
      <h2 className="text-3xl font-bold text-center my-8 px-4">{data?.title || 'Gặp gỡ Giảng viên của chúng tôi'}</h2>
      <div className="flex flex-wrap justify-center mb-8">
        {
          imageData.map((instructor, index) => (
            <div key={instructor.imageUrl} className="w-full lg:w-1/3 p-4 basis-80">
              <Image width={300} height={300} src={instructor.imageUrl} alt={`Giảng viên ${index + 1}`} className="w-full h-64 object-cover rounded-full mb-4" />
              <p className="text-center">{instructor.content}</p>
            </div>
          ))
        }
        {data?.content?.trim() !== '' && (
          <div className="w-full p-4">
            <p className="text-center">{data?.content}</p>
          </div>
        )}
      </div>
    </AnimateComponent>
  );
}
