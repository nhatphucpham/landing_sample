import Image from "next/image";
import { ContentData } from "./type";
import AnimateComponent from "./shared/AnimateComponent";
import { getImageByLandingContentId } from "../data";

interface GoalProps {
  className: string;
  data: ContentData;
}
export default async function Goals({ className, data }: GoalProps) {
  const goalData = await getImageByLandingContentId(data.id);

  return (
    <AnimateComponent as="div" className={`${className || ''} container bg-gray-800 text-white`}>
      <h2 className="text-3xl font-bold text-center my-8">{data?.title || 'Mục tiêu và Đạt được'}</h2>
      <div className="flex flex-wrap justify-center mb-8">
        {
          goalData.map((goal) => (
            <div key={goal.imageUrl} className="w-full md:w-1/3 p-4 basis-80">
              <Image width={300} height={300} src={goal.imageUrl} alt="Goal 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <p className="text-justify">{goal.content}</p>
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
  )
}
