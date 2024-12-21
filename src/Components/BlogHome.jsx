import React from "react";
import  gdg from '../assests/gdg.png'
import GDGLOGO from '../assests/GDGLOGO.png'
import Blog from '../assests/Blog4.jpg'
import chair from '../assests/Illustration.png'
const BlogSection = () => {
  return (
    <>
    <section className="w-full h-[75vh] flex flex-col-reverse lg:flex-row items-center">
      <div className="left w-full lg:w-[50vw] h-full bg-white flex flex-col justify-center lg:pl-24 px-8 text-black">
        <div className="flex items-center  ">
          <img className="h-28 w-28" src={GDGLOGO} alt="GDG Logo" />
          <h1 className="text-5xl lg:text-7xl font-bold ml-4">
            <span className="">x</span> IPSA
          </h1>
        </div>
        <h2 className="text-5xl lg:text-7xl  font-bold text-blue-600 mb-4">
          BLOGS
        </h2>
        <p className="text-lg lg:text-2xl font-medium text-gray-700">
        Welcome to the GDG Blog, where we share the latest tech news, tutorials, and stories from our vibrant community of developers, innovators, and dreamers.
        </p>
      </div>

      <div className="right w-full lg:w-[50vw] h-full flex items-center justify-center ">
        <img
          className="w-[90%] lg:w-[80%] h-auto object-cover"
          src={chair}
          alt="Blog"
        />
      </div>

    </section>

    
<div className="flex items-center  justify-center mt-8 animate-bounce">
<svg
to={'/blogs'}
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth="1.5"
 stroke="currentColor"
 className="w-8 h-8 text-gray-600"
>
 <path
   strokeLinecap="round"
   strokeLinejoin="round"
   d="M19.5 10.5l-7.5 7.5-7.5-7.5"
 />
</svg>
</div>

</>
  );
};

export default BlogSection;


