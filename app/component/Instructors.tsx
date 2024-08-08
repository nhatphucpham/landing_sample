export default function Instructors() {
  return (
    <div className="bg-gray-200">
      <h2 className="text-3xl font-bold text-center mt-16 mb-8">Meet Our Instructors</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/instructor1.jpg" alt="Instructor 1" className="w-full h-64 object-cover rounded-full mb-4" />
          <p>John Doe, Expert in Web Development</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/instructor2.jpg" alt="Instructor 2" className="w-full h-64 object-cover rounded-full mb-4" />
          <p>Jane Smith, Data Science Specialist</p>
        </div>
      </div>
    </div>
  );
}
