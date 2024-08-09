export default function Goals() {
  return (
    <div className="container bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center my-8">Mục tiêu và Đạt được</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/image1.jpg" alt="Mục tiêu 1" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p>Đạt được hiểu biết toàn diện về các xu hướng công nghệ mới nhất.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/image2.jpg" alt="Mục tiêu 2" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p>Đạt được kinh nghiệm thực tế thông qua các dự án và sự hợp tác thực tế.</p>
        </div>
      </div>
    </div>
  )
}
