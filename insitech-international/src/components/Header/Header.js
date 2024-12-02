// components/Header/Header.js
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Company",
      dropdownItems: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      label: "Services",
      dropdownItems: [
        {
          label: "Custom Solution Development",
          href: "#custom-solution-development",
        },
        { label: "Training and Workshops", href: "#training-workshops" },
        { label: "Consulting Services", href: "#consulting-services" },
        { label: "Managed Services", href: "#managed-services" },
      ],
    },
    {
      label: "Resources",
      dropdownItems: [
        { label: "Blog", href: "#blog" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Resources", href: "#resources-content" },
        { label: "FAQs", href: "#faqs" },
      ],
    },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : styles.headerTransparent
        }`}
      >
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <a href="/" className="block">
                <img
                  src="/images/logo/brand-logo.png"
                  alt="Insitech International"
                  className={styles.logoImage}
                />
              </a>
            </div>

            <nav className={styles.desktopNav}>
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </nav>

            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

const NavItem = ({ label, href, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!dropdownItems) {
    return (
      <a href={href} className={styles.navLink}>
        {label}
      </a>
    );
  }

  return (
    <div
      className={styles.navItem}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={styles.dropdownButton}>
        <span>{label}</span>
        <svg
          className={`${styles.dropdownIcon} ${
            isOpen ? styles.dropdownIconOpen : ""
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

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {dropdownItems.map((item, index) => (
            <a key={index} href={item.href} className={styles.dropdownItem}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
