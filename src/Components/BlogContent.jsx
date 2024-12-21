import React  ,{useState} from 'react'
import { motion } from "framer-motion";
const BlogContent = () => {

  const blogs = [
    {
      id: 1,
      title: "Bill Walsh leadership lessons",
      author: "Alec Whitten",
      date: "1 Jan 2023",
      description:
        "Bill Walsh transformed the San Francisco 49ers from a struggling 2-14 team into a 3x Super Bowl-winning dynasty. His leadership philosophy revolved around meticulous planning, building a strong organizational culture, and empowering his team to achieve greatness. In this article, we delve into the timeless leadership lessons from one of the NFL's most influential coaches.",
      tags: ["Leadership", "Management"],
      image:
        "https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      relatedImages: [
        "https://images.unsplash.com/photo-1517817748499-49ec8b66f81c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Migrating to Linear 101",
      author: "Phoenix Baker",
      date: "12 Mar 2023",
      description:
        "Linear offers a streamlined solution for managing software projects, sprints, tasks, and bug tracking. From setting up your workspace to exploring advanced features, this guide provides everything you need to know for a smooth migration to Linear. Learn how to maximize efficiency and collaboration with this modern tool.",
      tags: ["Productivity", "Tools"],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwNjR8MHwxfGFsbHwxfHx8fHx8fHwxNjgzOTIwOTIz&ixlib=rb-1.2.1&q=80&w=1080",
      relatedImages: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573164574235-9281b2e8934e?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      id: 3,
      title: "Building your API stack",
      author: "Lana Stevier",
      date: "8 Sep 2023",
      description:
        "APIs have become the backbone of modern software development, enabling seamless integration between applications. Building an API stack involves selecting the right tools for design, testing, and deployment. In this comprehensive guide, we cover best practices and strategies for creating scalable, secure, and efficient APIs.",
      tags: ["Software Engineering", "APIs"],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwNjR8MHwxfGFsbHwxfHx8fHx8fHwxNjgzOTIwOTUy&ixlib=rb-1.2.1&q=80&w=1080",
      relatedImages: [
        "https://images.unsplash.com/photo-1581092328193-5e7b5a72e5f5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565728744388-7d2b14e65cfa?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      id: 4,
      title: "UX review presentations",
      author: "Olivia Frye",
      date: "20 Jan 2023",
      description:
        "Creating engaging presentations is key to communicating ideas effectively. This article explores strategies for designing UX presentations that resonate with your audience. Learn how to structure content, use compelling visuals, and deliver impactful messages to impress both colleagues and stakeholders.",
      tags: ["Design", "Research"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwNjR8MHwxfGFsbHwxfHx8fHx8fHwxNjgzOTIwODUy&ixlib=rb-1.2.1&q=80&w=1080",
      relatedImages: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      id: 5,
      title: "Marketing strategies in 2024",
      author: "Jordan Hughes",
      date: "5 Feb 2024",
      description:
        "As competition intensifies, marketing strategies are evolving to capture attention and build lasting connections with audiences. This article highlights the top trends and techniques for elevating your brand in 2024. From leveraging AI to creating personalized experiences, discover the tools and insights to stay ahead in the game.",
      tags: ["Marketing", "Branding"],
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwNjR8MHwxfGFsbHwxfHx8fHx8fHwxNjgzOTIwODUy&ixlib=rb-1.2.1&q=80&w=1080",
      relatedImages: [
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556742400-b5b7c5124d70?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      id: 6,
      title: "Top 10 design trends",
      author: "Cameron Bell",
      date: "14 Mar 2024",
      description:
        "The creative industry is constantly evolving, and staying updated with the latest design trends is crucial for professionals. From minimalism to bold typography, this article explores the top 10 design trends that are reshaping the visual landscape in 2024. Embrace these trends to create stunning and relevant designs.",
      tags: ["Design", "Trends"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
      relatedImages: [
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  ];
  
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const loadMoreBlogs = () => {
    setVisibleBlogs(visibleBlogs + 2);
  };

  return (
    <div>
      <main className="w-full px-6 py-12 ">
      <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Recent Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
  {
    title: "UX review presentations",
    description:
      "Creating compelling presentations is an art that involves crafting a narrative, designing visually appealing slides, and delivering your ideas with confidence. In this guide, we'll explore essential techniques for designing presentations that not only capture attention but also effectively communicate your message to colleagues, managers, and stakeholders.",
    tag: "Design",
    author: "Olivia Rhye",
    authorImg: "https://4kfaces.com/images/female22.png",
    date: "20 Jan 2022",
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    relatedImg: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear is a tool designed to help teams streamline their software development workflows. Whether it's managing sprints, tracking bugs, or handling tasks, Linear offers a clean and efficient interface that makes collaboration easier. This guide walks you through the basics of Linear, from initial setup to advanced features, ensuring a smooth migration process.",
    tag: "Product",
    author: "Phoenix Baker",
    authorImg: "https://4kfaces.com/images/female31.png",
    date: "19 Jan 2022",
    img: "https://assets.bosch.com/media/global/stories/technology_report_tech_compass_2024/tech-compass-2024-stage_res_1984x1116.webp",
    relatedImg: "https://images.unsplash.com/photo-1607014975215-dfbc4740f370?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has revolutionized how applications communicate and integrate with each other. Building an API stack involves choosing the right tools for creation, testing, and management. In this article, we discuss the various technologies available to developers and provide insights into designing robust and scalable APIs for modern applications.",
    tag: "Software Engineering",
    author: "Lana Steiner",
    authorImg: "https://4kfaces.com/images/male5.png",
    date: "18 Jan 2022",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    relatedImg: "https://images.unsplash.com/photo-1559757171-f6ecf56f05d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
].map((post, index) => (
          <motion.div
            key={index}
            className=" border border-gray-200 p-4 rounded-lg transition-shadow duration-300"
            whileHover={{
              scale: 1.1,
              backdropFilter: "blur(10px)",
               background: "rgba(255, 255, 255, 0.8)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <span className="text-purple-600 text-sm font-semibold mb-2 block">
              {post.tag}
            </span>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{post.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <div className="mr-2">
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{post.author}</p>
                <p>{post.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="mb-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl font-bold mb-8 text-center">All Blog Posts</h2>
      <div className="flex flex-col gap-8">
        {blogs.slice(0, visibleBlogs).map((post) => (
          <div
            key={post.id}
            className="w-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                <span className="font-medium text-gray-800">{post.author}</span>{" "}
                · {post.date}
              </div>
              <h3 className="text-xl font-bold mb-4 hover:underline cursor-pointer">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleBlogs < blogs.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={loadMoreBlogs}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
      </main>
    </div>
  )
}

export default BlogContent
