'use client';

import { signIn } from "next-auth/react";
import './login-button.css';

type LoginButtonProps = {
    icon?: React.ReactNode;
    provider: string;
    text?: string;
    disabled?: boolean;
};

export const LoginButton: React.FC<LoginButtonProps> = ({ icon, provider, text, disabled }) => {
    const handleLogin = async () => {
        await signIn(provider);
    };

    return (
        <button onClick={handleLogin} className="btn-primary btn-login" disabled={disabled}>
            {icon}
            <span className="inline-block ml-2 pt-1">{text}</span>
        </button>
    );
};

export default LoginButton;