// components/Blog/Blog.tsx
import React from "react";
import { motion } from "framer-motion";
import { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Harnessing the Power of Data Science for Business Growth",
      excerpt: "Learn how data science is transforming modern businesses...",
      category: "Data Science",
      author: "Author",
      comments: 15,
      date: "July 15, 2024",
      readTime: "12 min",
      image: {
        src: "/images/blog/blog-img1.webp",
        alt: "Data Science",
      },
      // ... other fields
    },
    // ... other blog posts
  ];

  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.blogWrapper}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.metaText}>Get Insights</span>
            <h2 className={styles.title}>Latest Blog Posts</h2>
          </motion.div>

          <div className={styles.blogGrid}>
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} onSelect={() => setSelectedPost(post)} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

export default Blog;
