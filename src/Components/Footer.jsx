import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import gdgLogo from '../assests/GD.svg';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { toast } from "sonner";

// Initialize Firestore


const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setLoading(true);

    // Save form data to Firestore
    try {
      await addDoc(collection(db, "contactus"), formData);
      console.log("Document written with ID: ", formData);
      toast.success("Form submitted successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error submitting form!");
    } finally {
      setLoading(false);
    }

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-white text-black py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="text-center md:text-left">
              <img
                src={gdgLogo}
                alt="GDG Logo"
                className="h-10 md:h-12 mb-4 md:mb-6 mx-auto md:mx-0"
              />
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Google Developer Groups IPSA
              </h2>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                  <FaFacebook size={20} className="md:w-6 md:h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300">
                  <FaTwitter size={20} className="md:w-6 md:h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                  <FaInstagram size={20} className="md:w-6 md:h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
                  <FaLinkedin size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center md:text-left">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="3"
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-2 text-sm md:text-base rounded-md hover:bg-blue-700 transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 md:mt-12 pt-4 md:pt-6 text-center text-xs md:text-sm text-gray-600">
          <p>&copy; 2024 GDG. All Rights Reserved.</p>
          <p className="mt-1">Made With Love By GDG Web Team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
