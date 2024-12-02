// components/Brand/Brand.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Brand.module.css";

interface BrandLogo {
  id: number;
  url: string;
  image: string;
  alt: string;
}

const brandLogos: BrandLogo[] = [
  {
    id: 1,
    url: "#",
    image: "/images/brand/brand-img1.png",
    alt: "Brand Logo 1",
  },
  {
    id: 2,
    url: "#",
    image: "/images/brand/brand-img2.png",
    alt: "Brand Logo 2",
  },
  {
    id: 3,
    url: "#",
    image: "/images/brand/brand-img3.png",
    alt: "Brand Logo 3",
  },
  {
    id: 4,
    url: "#",
    image: "/images/brand/brand-img4.png",
    alt: "Brand Logo 4",
  },
  {
    id: 5,
    url: "#",
    image: "/images/brand/brand-img5.png",
    alt: "Brand Logo 5",
  },
];

const Brand = () => {
  return (
    <section className={styles.brandSection}>
      <div className="container">
        <motion.div
          className={styles.brandWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.brandSlider}>
            {/* First set of logos */}
            {brandLogos.map((brand) => (
              <BrandItem key={brand.id} brand={brand} />
            ))}
            {/* Duplicate set for infinite loop effect */}
            {brandLogos.map((brand) => (
              <BrandItem key={`duplicate-${brand.id}`} brand={brand} />
            ))}
          </div>
        </motion.div>
        <div className={styles.borderBottom} />
      </div>
    </section>
  );
};

interface BrandItemProps {
  brand: BrandLogo;
}

const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
  return (
    <motion.div
      className={styles.brandItem}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href={brand.url}
        className={styles.brandLink}
        rel="noopener noreferrer"
      >
        <div className={styles.imageWrapper}>
          <Image
            src={brand.image}
            alt={brand.alt}
            width={150}
            height={80}
            className={styles.brandImage}
          />
        </div>
      </a>
    </motion.div>
  );
};

export default Brand;
