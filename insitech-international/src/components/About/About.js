// components/About/About.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import FunFacts from "./FunFacts";
import Awards from "./Awards";

const About = () => {
  return (
    <>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutWrapper}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Section */}
              <motion.div
                className={styles.imageWrapper}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.imageBox} data-tilt data-tilt-max="10">
                    <Image
                      src="/images/about/about-img.jpg"
                      alt="About Insitech International"
                      width={540}
                      height={400}
                      className={styles.mainImage}
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className={styles.shape1} />
                  <div className={styles.shape2} />

                  {/* Download Button */}
                  <div className={styles.downloadWrapper}>
                    <Image
                      src="/images/about/download-bg1.png"
                      alt=""
                      width={120}
                      height={120}
                      className={styles.downloadBg}
                    />
                    <a href="/about" className={styles.downloadLink}>
                      <Image
                        src="/images/icon/explore-icon.png"
                        alt="Explore"
                        width={80}
                        height={80}
                      />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className={styles.contentWrapper}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.content}>
                  <span className={styles.subtitle}>About Insitech</span>
                  <h2 className={styles.title}>
                    Innovative Solutions for a Modern World
                  </h2>

                  <div className={styles.description}>
                    <p>
                      At Insitech International, we specialize in developing
                      cutting-edge technology solutions tailored to meet the
                      unique needs of our clients. From advanced data systems to
                      comprehensive backend support, our team leverages the
                      latest in technology and industry best practices to
                      deliver exceptional results.
                    </p>
                    <p>
                      Our commitment to excellence and innovation drives us to
                      continually push the boundaries of what's possible. We
                      empower businesses to thrive in a data-driven world by
                      providing bespoke solutions and expert consulting
                      services.
                    </p>
                  </div>

                  {/* Info Grid */}
                  <div className={styles.infoGrid}>
                    <div>
                      <h4>Services</h4>
                      <p>
                        Custom Solutions, Training, Consulting, Managed Services
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Email:</strong> info@insitechinternational.com
                      </p>
                      <p>
                        <strong>Website:</strong> www.insitechinternational.com
                      </p>
                    </div>
                  </div>

                  {/* Signature Section */}
                  <div className={styles.signatureSection}>
                    <div className={styles.signature}>
                      <Image
                        src="/images/about/signature.png"
                        alt="Signature"
                        width={180}
                        height={60}
                      />
                    </div>
                    <div className={styles.signatureText}>
                      <h6>Insitech International</h6>
                      <span>Your Partner in Data Solutions</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FunFacts />
      <Awards />
    </>
  );
};

export default About;
