'use client'
import React from "react";

const Page = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/RichardAlvinPratama_CV_2025.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          maxWidth: "100vw",
          maxHeight: "100vh"
        }}
      />
    </div>
  );
};

export default Page;