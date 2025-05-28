import { ReactNode } from 'react';
export default function Protected({ children, authentication, }: {
    children: ReactNode;
    authentication?: boolean;
}): import("react/jsx-runtime").JSX.Element;
