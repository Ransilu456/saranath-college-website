"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";


type InputVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "secondary-light";

type InputState = "default" | "error" | "success";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  variant?: InputVariant;
  state?: InputState;
}

export default function Input({ label, helperText, variant = "primary",  state = "default", type = "text", className = "", ...props }: InputProps) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}

      <div className="input-field">
        <input {...props} type={isPassword && show ? "text" : type} data-variant={variant} data-state={state !== "default" ? state : undefined} className={`input-base ${isPassword ? "pr-10" : ""} ${className}`}/>

        {isPassword && (
          <button
            type="button"
            className="input-toggle"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>

      {helperText && (
        <span
          className="input-helper"
          data-state={state !== "default" ? state : undefined}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}