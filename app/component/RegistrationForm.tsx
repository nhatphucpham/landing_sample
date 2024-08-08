'use client';

// components/RegistrationForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FiUser, FiMail, FiChevronDown, FiPhone } from 'react-icons/fi';
import AnimateComponent from '@/app/component/AnimateComponent';
import { useRouter } from 'next/navigation';
import MultipleChoose from './shared/MultipleChoose';
import DateTimePicker from './shared/DateTimePicker/DateTimePicker';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  course: string;
  dateOfBirth: Date;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  course: Yup.string().required('Required'),
  dateOfBirth: Yup.date().required('Required'),
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

  const handleCourseSelect = (course: string[]) => {
    console.log('Selected course:', course);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully');
        router.push('/thankyou');
      } else {
        // Handle error
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form', error);
    }
  };
  console.log(register('dateOfBirth', { required: true }));

  return (
    <AnimateComponent as="section" className="py-16 px-4 bg-gray-800 text-gray-800 overflow-visible">
      <div className="container mx-auto max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Register Now</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiUser />
            </span>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Your Name"
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
              placeholder="Your Email"
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
              placeholder="Your Phone Number"
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
