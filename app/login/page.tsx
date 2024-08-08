'use client';

import LoginButton from "@/app/component/LoginButton";
import { useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

interface LoginProps {
}

export default function Login({ }: LoginProps) {
  const { data: session } = useSession();
  
  return (
    <div className="mx-0 px-0 pt-24">
      <div className="container mx-auto p-4 bg-white text-gray-800">
        <div className="text-3xl font-bold text-center mb-4">Đăng nhập</div>
        <div className="text-center mb-4">Chọn một trong các phương thức sau để đăng nhập</div>
        <div className="flex justify-center space-x-4 mb-4">
          <LoginButton
            provider="google"
            disabled={!!session} icon={<FcGoogle size={35} />}
            text="Login via Google" />
          {session && <button className="btn-secondary">Đăng Xuất</button>}
        </div>
      </div>
    </div>
  );
}

