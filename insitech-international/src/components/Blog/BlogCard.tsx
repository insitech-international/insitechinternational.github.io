// components/Blog/BlogCard.tsx
import React from "react";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { Folder, User, MessageCircle } from "lucide-react";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: BlogPost;
  onSelect: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={400}
          height={300}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Folder size={16} className={styles.icon} />
            <span>{post.category}</span>
          </div>
          <div className={styles.metaItem}>
            <User size={16} className={styles.icon} />
            <span>{post.author}</span>
          </div>
          <div className={styles.metaItem}>
            <MessageCircle size={16} className={styles.icon} />
            <span>{post.comments}</span>
          </div>
        </div>

        <h3 className={styles.title}>
          <button onClick={onSelect} className={styles.titleButton}>
            {post.title}
          </button>
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
