import React from 'react';
import { User, Calendar, MessageSquare, Heart, Share2, ArrowRight } from 'lucide-react';

const BlogPostCard = ({ imageSrc, category, categoryBg, title, text }) => {
  
  const likes = 20;
  const comments = 15;
  const shares = 5;

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl w-full max-w-sm mx-auto">
      
      {/* --- Image Container --- */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Category Tag */}
        <div className={`absolute top-4 left-4 ${categoryBg} text-white text-sm font-medium px-3 py-1 rounded-full shadow-md`}>
          {category}
        </div>
      </div>

      {/* --- Card Content --- */}
      <div className="p-6 space-y-4">
        
        {/* Meta Info (Admin & Date) */}
        <div className="flex text-sm text-gray-500 space-x-4 border-b pb-4">
          <div className="flex items-center space-x-1">
            <User size={16} className="text-sky-500" />
            <span>Admin</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar size={16} className="text-sky-500" />
            <span>22 June 2023</span>
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-gray-900 leading-snug hover:text-sky-500 transition cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{text}</p>

        {/* Footer Section */}
        <div className="flex justify-between items-center pt-2">
          
          {/* Read More Link (Aligned Left) */}
          <a 
            href="#" 
            className="flex items-center text-sm font-medium text-gray-700 hover:text-sky-500 transition"
          >
            Read More <ArrowRight size={16} className="ml-2" />
          </a>

          {/* Social Stats */}
          <div className="flex space-x-3 text-gray-500 text-sm">
            <div className="flex items-center space-x-1 hover:text-red-500 transition cursor-pointer">
              <Heart size={16} />
              <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-sky-500 transition cursor-pointer">
              <MessageSquare size={16} />
              <span>{comments}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-gray-700 transition cursor-pointer">
              <Share2 size={16} />
              <span>{shares}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
