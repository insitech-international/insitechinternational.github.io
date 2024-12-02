// components/About/hooks/useCountAnimation.js
import { useState, useEffect, useCallback } from "react";

export const useCountAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const startAnimation = useCallback(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  useEffect(() => {
    if (isInView) {
      return startAnimation();
    }
  }, [isInView, startAnimation]);

  return [count, setIsInView];
};

// components/About/hooks/useTilt.js
import { useEffect, useRef } from "react";

export const useTilt = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      max: 10,
      speed: 400,
      scale: 1.05,
      transition: true,
      ...options,
    };

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (defaultOptions.max * (y - centerY)) / centerY;
      const rotateY = -(defaultOptions.max * (x - centerX)) / centerX;

      element.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${defaultOptions.scale})
      `;
    };

    const handleMouseLeave = () => {
      element.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [options]);

  return elementRef;
};

// components/About/hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
