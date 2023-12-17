import { ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex flex-col items-center p-24">
            <h1 className="text-5xl">Hola mundo </h1>
            {children}
        </main>
    );
}