import React from "react";
import { AlertCircle, CheckCircle2, XCircle, Info } from "lucide-react";

// Button Component with variants
const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  onClick,
  type = "button",
  icon: Icon,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </button>
  );
};

// Card Component
const Card = ({ children, className = "", hover = false, padded = true }) => {
  return (
    <div
      className={`
      bg-white rounded-xl shadow-sm 
      ${hover ? "transition-shadow hover:shadow-md" : ""}
      ${padded ? "p-6" : ""}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

// Input Component
const Input = ({
  type = "text",
  label,
  error,
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
          w-full rounded-lg border border-gray-300 px-4 py-2
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          disabled:cursor-not-allowed disabled:bg-gray-100
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

// Badge Component
const Badge = ({ children, variant = "default", size = "md" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base",
  };

  return (
    <span
      className={`
      inline-flex items-center font-medium rounded-full
      ${variants[variant]}
      ${sizes[size]}
    `}
    >
      {children}
    </span>
  );
};

// Alert Component
const Alert = ({ children, variant = "info", className = "", onClose }) => {
  const variants = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: Info,
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: CheckCircle2,
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      icon: AlertCircle,
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: XCircle,
    },
  };

  const { bg, border, text, icon: Icon } = variants[variant];

  return (
    <div
      className={`
      ${bg} ${border} ${text}
      flex items-center p-4 rounded-lg border
      ${className}
    `}
    >
      <Icon className="h-5 w-5 mr-3" />
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-3 inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <XCircle className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div
          className={`
          inline-block w-full ${sizes[size]} p-6 my-8 text-left 
          bg-white rounded-lg shadow-xl transform transition-all
        `}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <XCircle className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Avatar Component
const Avatar = ({ src, alt, size = "md", className = "" }) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <div className={`${sizes[size]} ${className} relative`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="rounded-full object-cover w-full h-full"
        />
      ) : (
        <div className="rounded-full bg-gray-200 w-full h-full flex items-center justify-center">
          <span className="text-gray-500 text-sm font-medium">
            {alt?.charAt(0)?.toUpperCase() || "?"}
          </span>
        </div>
      )}
    </div>
  );
};

// Spinner Component
const Spinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-blue-600 h-full w-full" />
    </div>
  );
};

export { Button, Card, Input, Badge, Alert, Modal, Avatar, Spinner };
