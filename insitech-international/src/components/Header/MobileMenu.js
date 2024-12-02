// components/Header/MobileMenu.js
import React, { useState } from "react";
import { X } from "lucide-react";
import styles from "./MobileMenu.module.css";

export const MobileMenu = ({ isOpen, onClose, navItems }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      )}

      {/* Menu Panel */}
      <div
        className={`
          ${styles.menuPanel} 
          ${isOpen ? styles.menuPanelOpen : styles.menuPanelClosed}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={styles.menuHeader}>
            <span className={styles.menuTitle}>Menu</span>
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className={styles.nav}>
            {navItems.map((item, index) => (
              <MobileNavItem key={index} {...item} onClose={onClose} />
            ))}
          </nav>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <div className={styles.socialLinksContainer}>
              {[
                { name: "facebook", icon: "fab fa-facebook-f" },
                { name: "twitter", icon: "fab fa-twitter" },
                { name: "linkedin", icon: "fab fa-linkedin-in" },
                { name: "instagram", icon: "fab fa-instagram" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={`#${social.name}`}
                  className={styles.socialLink}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <i className={`${social.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileNavItem = ({ label, href, dropdownItems, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!dropdownItems) {
    return (
      <a href={href} className={styles.mobileNavButton} onClick={onClose}>
        {label}
      </a>
    );
  }

  return (
    <div className={styles.mobileNavItem}>
      <button
        className={styles.mobileNavButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`
          ${styles.mobileDropdownContent}
          ${isOpen ? "max-h-96" : "max-h-0 overflow-hidden"}
        `}
      >
        {dropdownItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={styles.mobileDropdownItem}
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
