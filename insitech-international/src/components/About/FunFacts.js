// components/About/FunFacts.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./FunFacts.module.css";

const facts = [
  { number: 10, text: "Years of Experience" },
  { number: 500, text: "Total Clients" },
  { number: 1200, text: "Projects Completed" },
  { number: 50, text: "Digital Products" },
];

const FunFacts = () => {
  return (
    <section className={styles.funFactsSection}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.subtitle}>Fun Facts</span>
            <h2 className={styles.title}>Precision in Data, Power in Python</h2>
            <p className={styles.description}>
              At Insitech, we specialize in leveraging Python's power to deliver
              precision-driven data solutions. Our expertise in custom software
              development and data management helps businesses unlock valuable
              insights and achieve their goals with efficiency and innovation.
            </p>
          </motion.div>

          <div className={styles.statsGrid}>
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CountUp end={fact.number} />
                <h3>{fact.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CountUp component for animated numbers
const CountUp = ({ end }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
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
  }, [end]);

  return <span className={styles.counter}>{count}</span>;
};

export default FunFacts;
