// components/Careers/Careers.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './Careers.Module.css';

interface CareerPosition {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const careerPositions: CareerPosition[] = [
  {
    id: 'dev',
    title: 'Software Developer',
    description: 'We're seeking a talented software developer to work on exciting projects and contribute to our technology stack.',
    icon: <Code className={styles.positionIcon} />,
    link: '/careers/software-developer'
  },
  {
    id: 'design',
    title: 'UI/UX Designer',
    description: 'Join our design team to create beautiful and user-friendly interfaces that enhance the user experience.',
    icon: <Palette className={styles.positionIcon} />,
    link: '/careers/ui-ux-designer'
  },
  {
    id: 'marketing',
    title: 'Marketing Specialist',
    description: 'We're looking for a dynamic marketing specialist to drive our brand and engage with our audience effectively.',
    icon: <Megaphone className={styles.positionIcon} />,
    link: '/careers/marketing-specialist'
  }
];

const Careers = () => {
  return (
    <section className={styles.careersSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.metaText}>Careers</span>
          <h2 className={styles.title}>Join Our Team</h2>
          <p className={styles.description}>
            Explore exciting career opportunities and become a part of our innovative team. 
            We're looking for talented individuals who are passionate about their work.
          </p>
        </motion.div>

        <div className={styles.positionsGrid}>
          {careerPositions.map((position, index) => (
            <motion.div
              key={position.id}
              className={styles.positionCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CareerCard position={position} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            variant="secondary"
            size="lg"
            href="/careers"
          >
            View All Openings
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface CareerCardProps {
  position: CareerPosition;
}

const CareerCard: React.FC<CareerCardProps> = ({ position }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {position.icon}
      </div>
      <h4 className={styles.positionTitle}>{position.title}</h4>
      <p className={styles.positionDescription}>{position.description}</p>
      <Button 
        variant="primary"
        size="md"
        href={position.link}
        className={styles.applyButton}
      >
        Apply Now
      </Button>
    </div>
  );
};

export default Careers;