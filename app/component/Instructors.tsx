export default function Instructors() {
  return (
    <div className="container bg-gray-200 text-gray-800">
      <h2 className="text-3xl font-bold text-center my-8 px-4">Gặp gỡ Giảng viên của chúng tôi</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/instructor1.jpg" alt="Giảng viên 1" className="w-full h-64 object-cover rounded-full mb-4" />
          <p>John Doe, Chuyên gia về Phát triển Web</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img src="/path/to/instructor2.jpg" alt="Giảng viên 2" className="w-full h-64 object-cover rounded-full mb-4" />
          <p>Jane Smith, Chuyên gia về Khoa học Dữ liệu</p>
        </div>
      </div>
    </div>
  );
}
