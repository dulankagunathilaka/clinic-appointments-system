import React from 'react';
import BlogPostCard from './BlogPostCard';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  
  
  const blogPostsData = [
    {
      id: 1,
      imageSrc: '/src/assets/doctor.jpg', 
      category: 'Medical',
      categoryBg: 'bg-green-500',
      title: 'Telehealth Services Are Ready To Help Your...',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati...',
    },
    {
      id: 2,
      imageSrc: '/src/assets/doctor-set.jpg', 
      category: 'Hospital',
      categoryBg: 'bg-sky-500',
      title: 'Doccure – Making Your Clinic Painless Visit',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati...',
    },
    {
      id: 3,
      imageSrc: '/src/assets/surgery.jpg',
      category: 'Doctor',
      categoryBg: 'bg-red-500',
      title: 'What Are The Benefits Of Online Doctor...',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati...',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl relative">
        
        {/* --- Section Heading --- */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-lg font-semibold text-sky-500 tracking-wider uppercase flex items-center justify-center">
            <span className="mr-5">|</span>Latest News
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Latest Post & Articles
          </h2>
        </div>

        {/* --- Blog Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <BlogPostCard 
              key={post.id}
              imageSrc={post.imageSrc}
              category={post.category}
              categoryBg={post.categoryBg}
              title={post.title}
              text={post.text}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default BlogSection;
