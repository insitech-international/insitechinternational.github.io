// components/Blog/BlogModal.tsx
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Share2 } from "lucide-react";
import { BlogPost } from "@/types/blog";
import styles from "./BlogModal.module.css";

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className={styles.closeButton}>
            <X size={24} />
          </button>

          <div className={styles.modalContent}>
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={800}
              height={400}
              className={styles.modalImage}
            />

            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{post.title}</h2>

              <div className={styles.modalMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className={styles.content}>{post.content}</div>

              <div className={styles.tags}>
                <h6>Tags:</h6>
                <div className={styles.tagList}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.socialShare}>
                <h6>Share:</h6>
                <div className={styles.socialButtons}>
                  <ShareButtons url={post.slug} title={post.title} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogModal;
