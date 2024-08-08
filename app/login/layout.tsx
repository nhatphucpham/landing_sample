import React from 'react';
import ClientProvider from '@/app/component/shared/ClientProvider';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ClientProvider>
            {children}
        </ClientProvider>
    );
};

export default Layout;