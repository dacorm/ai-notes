'use client';
import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

interface ProviderProps {}

export const Provider: FC<PropsWithChildren<ProviderProps>> = ({ children }) => {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
