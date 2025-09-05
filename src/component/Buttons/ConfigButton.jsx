import React, { useState } from "react";
import { arrowSvg } from "../svg/configSvgs";

const ConfigButton = ({ label, handleButtonClick, className = "", disabled = false }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (disabled) return;
    setExpanded(!expanded);
    handleButtonClick?.(e);
  };

  // 🎨 Define base colors
  const primary = "#2A1459"; // purple
  const secondary = "#FFF"; // white
  const isSubmit = label === "SUBMIT";
  const isReset = label?.toLowerCase()?.includes("pre");

  // 🎨 Compute dynamic styles
  const bgColor = isSubmit ? primary : secondary;
  const fillColor = isSubmit ? secondary : primary;
  const textColor = isSubmit
    ? expanded
      ? primary
      : secondary
    : expanded
    ? secondary
    : primary;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type="button"
      className={`btn d-flex align-items-center position-relative overflow-hidden rounded ${className}`}
      style={{
        minWidth: isReset ? "300px" : "210px",
        height: "60px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: bgColor,
        border: `2px solid ${!isSubmit ? primary : secondary}`,
        padding: 0,
      }}
    >
      {/* Background Fill */}
      <div
        className="position-absolute top-0 start-0 h-100"
        style={{
          width: expanded ? "100%" : "30%",
          backgroundColor: fillColor,
          transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1,
        }}
      />

      {/* Arrow Section */}
      <div
        className="d-flex align-items-center justify-content-center h-100"
        style={{ width: "30%", zIndex: 2 }}
      >
        <div
          style={{
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            color: textColor,
          }}
        >
          {arrowSvg({ color: isSubmit ? primary : secondary })}
        </div>
      </div>

      {/* Label Section */}
      <div
        className="position-absolute top-50 translate-middle"
        style={{
          fontSize: "16px",
          fontWeight: "600",
          whiteSpace: "nowrap",
          color: textColor,
          transition: "color 0.4s ease",
          right: isSubmit ? 8 : isReset ? -60 : -50,
          zIndex: 2,
        }}
      >
        {label}
      </div>
    </button>
  );
};

export default ConfigButton;
