import React from 'react'
import Timeline from './Timeline'
import image from '../assests/image1.png'
import GDGLOGO from '../assests/GDGLOGO.png'
import home from '../assests/home.svg'
const EventsHome = () => {
  return (
    <> 
       <div className="h-screen lg:h-[85vh] w-full flex items-center justify-center px-4 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row  justify-center gap-6 ">
        <div className="flex-1">
        <div className="flex items-center  ">
          <img className="h-28 w-28" src={GDGLOGO} alt="GDG Logo" />
          <h1 className="text-5xl lg:text-7xl font-bold ml-4">
            <span className="">x</span> IPSA
          </h1>
        </div>
        <h2 className="text-5xl lg:text-7xl  font-bold text-green-600 mb-4">
          Events
        </h2>
        <p className="text-lg lg:text-2xl font-medium text-gray-700">
     
Join us to connect, learn, and innovate with like-minded individuals at our
exciting event. Experience workshops, networking opportunities, and much more.
        </p>
        </div>

        <div className="flex-1">
          <img
            src={image}
            alt="GDG Event"
            className="w-full md:w-[60%] h-[40vh] md:h-[50vh]  mx-auto"
          />
        </div>
      </div>
    </div>


    </>
  )
}

export default EventsHome
