import React from "react";

const VerticalImageScroller = ({ images, duration = 15 }) => {
  return (
    <div
      style={{
        height: "500px",
        width: "200px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          animation: `scrollUp ${duration}s linear infinite`,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <img
              src={src}
              alt={`capsule-${i}`}
              style={{
                width: "80px",       // capsule width
                height: "250px",      // capsule height
                borderRadius: "60px", // half of width for pill shape
                objectFit: "cover",   // fill capsule shape
                display: "block",
                margin: "0 auto",     // center inside column
              }}
            />
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default VerticalImageScroller;
