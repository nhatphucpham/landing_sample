export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 shadow-md mt-8">
      <div className="container mx-auto text-center">
        <p>© 2024 Khóa Học. All rights reserved.</p>
        <p>
          <a href="#" className="mx-2 hover:underline">Trang chủ</a> |
          <a href="#" className="mx-2 hover:underline">Giới thiệu</a> |
          <a href="#" className="mx-2 hover:underline">Liên hệ</a> |
          <a href="#" className="mx-2 hover:underline">Chính sách bảo mật</a>
        </p>
      </div>
    </footer>
  );
}