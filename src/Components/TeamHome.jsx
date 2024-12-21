import React from 'react'
import GDGLOGO from '../assests/GDGLOGO.png'
import chair from '../assests/Illustration.png'
import team from '../assests/team.jpg'
const TeamHome = () => {
  return (
    <div>
       <section className="w-full  h-[85vh] flex flex-col lg:flex-row items-center">
           <div className="left w-full lg:w-[50vw] h-full bg-white flex flex-col justify-center lg:pl-24 px-8 text-black">
             <div className="flex items-center  ">
               <img className="h-28 w-28" src={GDGLOGO} alt="GDG Logo" />
               <h1 className="text-5xl lg:text-7xl font-bold ml-4">
                 <span className="">x</span> IPSA
               </h1>
             </div>
             <h2 className="text-5xl lg:text-7xl  font-bold text-yellow-400 mb-4">
               Team
             </h2>
             <p className="text-lg lg:text-2xl font-medium text-gray-700">
             At GDG IPSA, we are a group of passionate tech enthusiasts, developers, and innovators committed to fostering a vibrant tech community.
             </p>
           </div>
     
           <div className="right w-full lg:w-[50vw] h-full flex items-center justify-center ">
             <img
               className="w-[90%] lg:w-[80%] h-auto object-cover"
               src={team}
               alt="Blog"
             />
           </div>
     
         </section>
    </div>
  )
}

export default TeamHome
