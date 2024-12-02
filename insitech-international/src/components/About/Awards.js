// components/About/Awards.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Awards.module.css";

const awards = [
  {
    logo: "/images/award/award-logo1.png",
    title: "Innovator of the Year",
    year: "2023",
    organization: "Data Excellence Society",
    location: "San Francisco, USA",
    description:
      "Recognized for groundbreaking achievements in data analytics and innovative Python solutions, showcasing exceptional skill and leadership in the field.",
  },
  {
    logo: "/images/award/award-logo2.png",
    title: "Top Data Scientist",
    year: "2022",
    organization: "Global Tech Review",
    location: "Berlin, Germany",
    description:
      "Honored for outstanding contributions to data science, setting new standards in the industry through innovative and impactful Python-based solutions.",
  },
  {
    logo: "/images/award/award-logo3.png",
    title: "Leading Innovator in Tech",
    year: "2021",
    organization: "Future Tech Forum",
    location: "Tokyo, Japan",
    description:
      "Awarded for exceptional achievements in technology and data analytics, demonstrating forward-thinking and innovation in the field.",
  },
];

const Awards = () => {
  return (
    <section className={styles.awardsSection}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Success Stories</span>
          <h2 className={styles.title}>Awards & Achievements</h2>
        </motion.div>

        <div className={styles.awardsGrid}>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className={styles.awardCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.awardLogo}>
                <Image
                  src={award.logo}
                  alt={award.title}
                  width={120}
                  height={120}
                />
              </div>

              <div className={styles.awardInfo}>
                <div className={styles.awardHeader}>
                  <h3>{award.title}</h3>
                  <span className={styles.year}>{award.year}</span>
                </div>

                <div className={styles.awardOrg}>
                  <h4>{award.organization}</h4>
                  <span>{award.location}</span>
                </div>

                <p className={styles.awardDescription}>{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
