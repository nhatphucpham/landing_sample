'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

export default function Notification() {
    return <ToastContainer />;
}

export const useNotification = () => {
    return {
        success: (message: string) => toast.success(message),
        error: (message: string) => toast.error(message),
        warning: (message: string) => toast.warning(message),
        info: (message: string, options: any) => toast.info(message, options),
        loading: (message: string, options: any) => toast.loading(message, options),
        update: (id: string | number, options: any) => toast.update(id, options),
        done: (id: string | number, options: any) => {
            toast.update(id, options);
            toast.dismiss(id);
        }
    };
}
