import React from "react";

import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  severity?: "info" | "danger";
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button = ({
  children,
  severity = "info",
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`button ${
        severity === "info" ? "button--info" : "button--danger"
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
