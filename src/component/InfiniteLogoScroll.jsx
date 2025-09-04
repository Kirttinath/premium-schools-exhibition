import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteLogoScroll = ({ logos }) => {
  return (
    <div className="scroll-wrapper mt-4" style={{ overflow: "hidden", width: "100%" }}>
      <Marquee
        speed={100}
        pauseOnHover
        gradient={false}
        direction="right"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="logo-box d-flex align-items-center justify-content-center p-2 bg-white"
            style={{
              width: "274px",
              height: "120px",
              border: "1px solid #E8E7E7",
              borderRadius: "2px",
              flex: "0 0 auto",
              marginRight: "40px",
            }}
          >
            <img
              src={logo}
              alt={`School Logo ${i}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default InfiniteLogoScroll;
