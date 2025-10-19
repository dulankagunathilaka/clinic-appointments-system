//blog page

import React from 'react';
import BlogHeroSection from '../components/BlogHeroSection';
import BlogSection from './BlogSection';
import FooterSection from '../components/FooterSection';

const BlogsPage = () => {
  return (
    <div>
      <section id="blogs" className="pt-[115px]">
        <BlogHeroSection/>
        <BlogSection/>
        <FooterSection/>
      </section>
    </div>
  );
};

export default BlogsPage;