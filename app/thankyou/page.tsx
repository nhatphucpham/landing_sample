import React from 'react';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col">
      <div className='h-24' />
      <div className="flex-grow container flex items-center justify-center mx-auto p-4 bg-white text-gray-800">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold py-6">Cảm ơn bạn đã gửi biểu mẫu!</h1>
          <p className="text-center text-balance py-6">Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ trong thời gian sớm nhất.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
