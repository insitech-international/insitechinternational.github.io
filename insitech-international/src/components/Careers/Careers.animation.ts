// components/Careers/animations.ts
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  export const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  
  // Custom hook for intersection observer animation
  import { useInView } from 'react-intersection-observer';
  
  export const useAnimateOnScroll = () => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });
  
    return [ref, inView];
  };