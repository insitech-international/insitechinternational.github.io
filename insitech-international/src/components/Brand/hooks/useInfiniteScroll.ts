// components/Brand/hooks/useInfiniteScroll.ts
import { useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = (speed: number = 30) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;
    let start: number;
    let previousTimestamp: number;
    let distance = 0;

    const animate = (timestamp: number) => {
      if (start === undefined) {
        start = timestamp;
      }

      const elapsed = timestamp - start;
      
      if (previousTimestamp !== timestamp && !isHovered) {
        const pixelsPerSecond = speed;
        const delta = (timestamp - (previousTimestamp || timestamp)) / 1000;
        distance += pixelsPerSecond * delta;

        // Reset position when we've scrolled half the width
        if (distance >= scrollElement.scrollWidth / 2) {
          distance = 0;
        }

        scrollElement.style.transform = `translateX(-${distance}px)`;
      }

      previousTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, isHovered]);

  return {
    scrollRef,
    setIsHovered
  };
};