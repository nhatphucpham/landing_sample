'use client';

// components/RegistrationForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FiUser, FiMail, FiChevronDown, FiPhone } from 'react-icons/fi';
import AnimateComponent from '@/app/component/shared/AnimateComponent';
import { useRouter } from 'next/navigation';
import MultipleChoose from './shared/MultipleChoose';
import DateTimePicker from './shared/DateTimePicker/DateTimePicker';
import { useNotification } from './shared/Notification';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  course: string;
  dateOfBirth: Date;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Bắt buộc'),
  email: Yup.string().email('Địa chỉ email không hợp lệ').required('Bắt buộc'),
  phoneNumber: Yup.string().required('Bắt buộc'),
  course: Yup.string().required('Bắt buộc'),
  dateOfBirth: Yup.date().required('Bắt buộc'),
});

export default function RegistrationForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const { loading, success, error, done } = useNotification();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const loadingNoti = loading('Đang gửi biểu mẫu...', { isLoading: true });
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      done(loadingNoti, { isLoading: false });

      if (response.ok) {
        console.log('Đã gửi biểu mẫu thành công');
        success('Đã gửi biểu mẫu thành công');
        router.push('/thankyou');
      } else {
        console.error('Gửi biểu mẫu không thành công');
        error('Đã xảy ra lỗi khi gửi biểu mẫu');
      }
    } catch (err) {
      done(loadingNoti, { isLoading: false });
      console.error('Đã xảy ra lỗi khi gửi biểu mẫu', err);
      error('Đã xảy ra lỗi khi gửi biểu mẫu');
    }
  };

  return (
    <AnimateComponent as="section" id="register" className="py-8 px-4 bg-gray-800 text-gray-800 overflow-visible">
      <div className="container mx-auto max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Đăng Ký Ngay</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiUser />
            </span>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Họ và Tên"
              className={`pl-10 pr-4 py-2 w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>
          <div className="mb-6 relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiMail />
            </span>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email của bạn"
              className={`pl-10 pr-4 py-2 w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>
          <div className="mb-6 relative">
            <DateTimePicker
              placeholder="Ngày Sinh"
              control={control}
              {...register('dateOfBirth', { required: true })}
            />
            <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth?.message}</p>
          </div>
          <div className="mb-6 relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiPhone />
            </span>
            <input
              type="text"
              {...register('phoneNumber', { required: true })}
              placeholder="Số điện thoại của bạn"
              className={`pl-10 pr-4 py-2 w-full border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber?.message}</p>
          </div>
          <div className="mb-6 relative">
            <MultipleChoose
              {...register('course', { required: true })}
              label="Bạn đặc biệt quan tâm đến các chủ đề nào trong khóa học?"
              error={errors.course}
              control={control}
              options={[
                { text: 'Java Developer', id: 'Java Developer' },
                { text: '.NET Developer', id: '.NET Developer' },
                { text: 'Embedded Systems (Hệ thống nhúng)', id: 'Embedded Systems (Hệ thống nhúng)' },
                { text: 'React Developer', id: 'React Developer' },
                { text: 'Khác', id: 'Khác' }
              ]}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:from-secondary hover:to-primary transition-all"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    </AnimateComponent>
  );
}
