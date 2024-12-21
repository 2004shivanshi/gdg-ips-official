import React from "react";
import Teamlead from '../assests/Lead.jpg'
const TeamLead = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-white px-8 py-12">
      <div className="md:w-1/2 w-full text-center md:text-left space-y-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-center md:justify-start">
      
        </div>

        <h1 className="text-5xl  font-bold text-black">GDG IPSA - Lead</h1>
        <h2 className="text-3xl text-gray-700 font-medium">
          Sonali Singh
        </h2>
        <p className="text-gray-600 leading-relaxed">
        Leading innovation at GDG IPSA, empowering developers to learn, share, and connect. Driving impactful events, workshops, and collaborations. Inspiring a tech-savvy community to shape the future together
        </p>
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">
          View Profile
        </button>
      </div>

      <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-gray-200 rounded-full overflow-hidden">
          <img
            src={Teamlead}
            alt="Team Lead"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamLead;

