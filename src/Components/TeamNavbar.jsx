import React, { useState } from "react";

const TeamNavbar = ({ setSelectedGroup }) => {
  const teamGroups = [
    "Lead",
    "Tech",
    "Graphics & AIML",
    "EventScape",
    "CineCraft",
    "TrendSetters",
  ];

  const [activeGroup, setActiveGroup] = useState("Lead");

  const handleClick = (group) => {
    setSelectedGroup(group);
    setActiveGroup(group);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <nav
        className="bg-white shadow-2xl rounded-lg px-6 py-4 mx-auto border-t-2 border-b-2 border-gray-200"
        style={{
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2), 0px -8px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex justify-center gap-4 flex-wrap">
          {teamGroups.map((group) => (
            <button
              key={group}
              onClick={() => handleClick(group)}
              className={`relative px-6 py-2 rounded-lg text-gray-700 font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${
                activeGroup === group
                  ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                  : "hover:text-white hover:bg-gradient-to-r from-blue-400 to-purple-400"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TeamNavbar;
