import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogContent from "./BlogContent";
import BlogSection from "./BlogHome";
import MovingText from "./MovingText";
const BlogPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black font-sans">    
      <BlogSection/>
      <MovingText/>
      <BlogContent/> 
    </div>
  );
};

export default BlogPage;
