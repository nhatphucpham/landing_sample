export default function Goals() {
  return (
    <div className="bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Goals and Achievements</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/image1.jpg" alt="Goal 1" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p>Achieve a comprehensive understanding of the latest technological trends.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/image2.jpg" alt="Goal 2" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p>Gain hands-on experience through practical projects and collaborations.</p>
        </div>
      </div>
    </div>
  )
}
