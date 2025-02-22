"use client";
import React from "react";
import { useRouter } from "next/navigation";


const Page = () => {
    const router = useRouter();

    return (
        <div className="error-container">
            <h1>404 - Page Not Found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist.</p>
            <button onClick={() => router.push("/")} className="back-button">
                Back To Home
            </button>
        </div>
    );
}

export default Page