// types/blog.ts

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: {
      src: string;
      alt: string;
    };
    category: string;
    author: string;
    comments: number;
    date: string;
    readTime: string;
    tags: string[];
    slug: string;
  }
  
  export interface BlogMetaData {
    category: string;
    author: string;
    date: string;
    readTime: string;
    comments: number;
  }
  
  export interface SocialShare {
    platform: 'facebook' | 'twitter' | 'linkedin' | 'google';
    url: string;
  }