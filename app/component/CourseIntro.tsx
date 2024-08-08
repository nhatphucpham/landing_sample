import AnimateComponent from "@/app/component/AnimateComponent";

// components/CourseIntro.js
export default function CourseIntro() {
  return (
    <AnimateComponent as="section" className="py-16 px-4 bg-gray-200 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Introduction to Our Course</h2>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-lg">
              Our course offers an in-depth look into the exciting world of technology. Join us to learn from industry experts and advance your career.
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
