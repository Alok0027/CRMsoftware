import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0E0E10] text-gray-300 pt-20 pb-10 px-6">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto bg-[#1A1A1C] rounded-xl p-10 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left leading-snug">
          Transform your business <br className="hidden md:block" />
          with us effortlessly
        </h2>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium">
            Contact us
          </button>
          <button className="bg-gray-700 text-white px-5 py-2 rounded-md font-medium">
            Learn more
          </button>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto bg-[#1A1A1C] rounded-xl p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-sm">
        {/* Column 1 */}
        <div>
          <h4 className="text-gray-500 text-base font-semibold mb-4">Main Page</h4>
          <ul className="space-y-2 text-base font-semibold">
            <li className='hover:text-blue-300'><a href="#">Home</a></li>
            <li className='hover:text-blue-300'><a href="#">About</a></li>
            <li className='hover:text-blue-300'><a href="#">Contact</a></li>
            <li className='hover:text-blue-300'><a href="#">Feature</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-gray-500 font-semibold mb-4 text-base">Inner Page</h4>
          <ul className="space-y-2 text-base font-semibold">
            <li className='hover:text-blue-300'><a href="#">Blog</a></li>
            <li className='hover:text-blue-300'><a href="#">Blog details</a></li>
            <li className='hover:text-blue-300'><a href="#">Team</a></li>
            <li className='hover:text-blue-300'><a href="#">Team details</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-gray-500 font-semibold mb-4 text-base">Inner Page</h4>
          <ul className="space-y-2 text-base font-semibold">
            <li className='hover:text-blue-300'><a href="#">Prices page</a></li>
            <li className='hover:text-blue-300'><a href="#">Terms & Condition</a></li>
            <li className='hover:text-blue-300'><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-gray-500 font-semibold mb-4 text-base">Authentication</h4>
          <ul className="space-y-2 text-base font-semibold">
            <li className='hover:text-blue-300'><a href="#">Sign up</a></li>
            <li className='hover:text-blue-300'><a href="#">Login</a></li>
            <li className='hover:text-blue-300'><a href="#">Forgot password</a></li>
            <li className='hover:text-blue-300'><a href="#">Confirm email</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="text-gray-500 font-semibold mb-4 text-base">Utility page</h4>
          <ul className="space-y-2 text-base font-semibold">
            <li className='hover:text-blue-300'><a href="#">Style guide</a></li>
            <li className='hover:text-blue-300'><a href="#">Licenses</a></li>
            <li className='hover:text-blue-300'><a href="#">404 not found</a></li>
            <li className='hover:text-blue-300'><a href="#">Protected</a></li>
            <li className='hover:text-blue-300'><a href="#">Change log</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500 gap-4">
        <p>
          Powered by <span className="text-blue-500">Nexolve</span> – Designed by{' '}
          <span className="text-blue-500">Alok</span>
        </p>
        <div className="flex gap-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-gray-400 cursor-pointer lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;