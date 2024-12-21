import React, { useState, useEffect } from 'react';
import AboutMain from '../assests/AboutMainVideo.mp4'
import IntroVideo from '../assests/IntroVideo.mp4'
import GDGLOGO from '../assests/GDGLOGO.png'
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesToShow = 1; // Show 1 card in mobile view

  const events = [
    {
      title: "Git & GitHub Workshop",
      description: "Learn version control and collaborative coding techniques. Understand branching, merging, and best practices.",
      date: "January 15, 2024"
    },
    {
      title: "Flutter Development Bootcamp",
      description: "Dive into cross-platform mobile app development with Flutter. Create beautiful, responsive apps.",
      date: "February 5, 2024"
    },
    {
      title: "Figma Design Masterclass",
      description: "Master UI/UX design tools and principles. Learn professional design workflows and techniques.",
      date: "March 12, 2024"
    },
    {
      title: "Hackathon: Innovation Challenge",
      description: "48-hour intensive coding event. Build innovative solutions and compete for exciting prizes.",
      date: "April 20-22, 2024"
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML concepts, algorithms, and practical implementations using Python.",
      date: "May 10, 2024"
    },
    {
      title: "Cybersecurity Workshop",
      description: "Learn ethical hacking, network security, and protect digital systems from potential threats.",
      date: "June 7, 2024"
    },
    {
      title: "Web Development Intensive",
      description: "Full-stack web development course covering frontend, backend, and deployment strategies.",
      date: "July 15, 2024"
    },
    {
      title: "Cloud Computing Seminar",
      description: "Explore cloud technologies, AWS, Azure, and serverless architecture fundamentals.",
      date: "August 22, 2024"
    },
    {
      title: "React & Next.js Workshop",
      description: "Advanced frontend development techniques with modern JavaScript frameworks.",
      date: "September 5, 2024"
    },
    {
      title: "AI & Generative Models",
      description: "Deep dive into AI technologies, large language models, and emerging trends.",
      date: "October 18, 2024"
    }
  ];

  useEffect(() => {
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };
  
    const updateCardWidth = debounce(() => {
      const firstCard = document.querySelector('.event-card');
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + 32);
      }
    }, 200);
  
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);
  

  const slideTimeline = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, events.length - 1));
    });
  };

  const nextSlide = () => {
    setActiveSlide((prev) => 
      prev === events.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) => 
      prev === 0 ? events.length - slidesToShow : prev - 1
    );
  };

  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      {/* <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow z-50">
        <div className="flex items-center">
          <img src="logo.jpeg" alt="GDG Logo" className="h-12 mr-2" />
          <span className="text-gray-600 font-bold">Google Developer Groups IPSA</span>
        </div>
        <div className="lg:hidden flex items-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <button className="text-black">
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>
        </div>
        <nav className={`hidden lg:flex text-gray-600`}>
          <a href="/home" className="mr-6 font-bold hover:text-gray-900">Home</a>
          <a href="/events" className="mr-6 font-bold hover:text-gray-900">Events</a>
          <a href="/ourteam" className="mr-6 font-bold hover:text-gray-900">Team</a>
          <a href="/blog" className="font-bold hover:text-gray-900">Blog</a>
        </nav>
      </header> */}

      {/* Mobile Menu */}
      {/* {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm flex justify-end">
          <div className="bg-white w-64 h-full p-6 rounded-l-lg shadow-lg flex flex-col">
            <button className="absolute top-4 right-4 text-gray-600 font-bold text-3xl" onClick={() => setMobileMenuOpen(false)}>&times;</button>
            <ul className="space-y-6 text-center">
              <li><a href="/home" className="block text-lg text-gray-600 font-bold hover:text-gray-900">Home</a></li>
              <li><a href="/events" className="block text-lg text-gray-600 font-bold hover:text-gray-900">Events</a></li>
              <li><a href="/ourteam" className="block text-lg text-gray-600 font-bold hover:text-gray-900">Team</a></li>
              <li><a href="/blog" className="block text-lg text-gray-600 font-bold hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
        </div>
      )} */}

      <main className="mt-16">
        <video src={IntroVideo} autoPlay loop controls className="w-full h-96" />
        <section className="hero h-full mb-10 flex flex-col items-center bg-white">
          <p className="text-black my-8 px-4 text-2xl text-center">
            Google Developer Student Groups are university-based community groups for students interested in Google developer technologies.
            GDGs on Campus provide learning opportunities for aspiring developers from universities and colleges around the world, allowing them to gain hands-on experience, develop essential skills, and build a strong foundation for a tech career. After graduating, GDGs on Campus members can seamlessly transition to a broader GDG community, continuing their learning and collaboration with fellow developers.
          </p>
          <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded">RSVP</a>
        </section>

        <section className="about px-6">
          <div className='flex flex-col items-center justify-center pb-8'>
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <div className="w-32 h-1 bg-cyan-400 mx-auto -mt-6"></div>
          </div>
     
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="video-container flex-1">
              <video src={AboutMain} loop autoPlay controls muted className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="content flex-1 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl text-blue-600 mb-4">Why GDG IPSA?</h3>
              <p className="text-gray-700 mb-4">
                At Google Developer Groups (GDG), we believe in empowering developers and fostering a community where innovation thrives. GDG provides a platform to connect, learn, and grow together. Students can dive into practical workshops, hackathons, and coding sessions that offer a hands-on experience with the latest technologies like Android, Flutter, Machine Learning, Web Development, Cloud Computing, and more. GDG offers you the chance to enhance your leadership skills by organizing events, mentoring peers, and contributing to impactful projects within your community.
              </p>
              <a href="https://gdg.community.dev/gdg-on-campus-ips-academy-indore-india/" className="bg-blue-600 text-white py-2 px-4 rounded">Know more</a>
            </div>
          </div>
        </section>

        <div className="timeline-container py-16 px-4 md:px-12 xl:px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#2D3748]">
            Upcoming Events
            <div className="w-32 h-1 bg-cyan-400 mx-auto mt-2"></div>
          </h1>

          <div className="relative">
        
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out gap-2 sm:gap-4"
                style={{ transform: `translateX(-${activeSlide * (100 / slidesToShow + 2.3)}%)` }}
              >
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="min-w-full sm:min-w-96 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between relative overflow-hidden">
                      {/* Animated line overlay */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-[#2D3748] group-hover:text-cyan-600 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {event.description}
                        </p>
                      </div>

                      <div className="text-blue-400 font-semibold">
                        {event.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className=" hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#63B3ED] text-white rounded-full w-10 h-10 sm:flex items-center justify-center hover:bg-blue-600 transition duration-200 z-10"
            >
              &#10095;
            </button>
            <button
              onClick={prevSlide}
              className="hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#63B3ED] text-white rounded-full w-10 h-10 sm:flex items-center justify-center hover:bg-blue-600 transition duration-200 z-10"
            >
              &#10094;
            </button>

            {/* nmobile buttons */}
            <button
              onClick={nextSlide}
              className=" sm:hidden absolute right-0 translate-x-1 bg-[#63B3ED] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition duration-200 z-10"
            >
              &#10095;
            </button>
            <button
              onClick={prevSlide}
              className="sm:hidden absolute left-0 translate-x-48 bg-[#63B3ED] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition duration-200 z-10"
            >
              &#10094;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;