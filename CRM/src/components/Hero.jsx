import React from 'react';
import { motion } from "framer-motion";
import crmp1 from "../assets/crmp1.jpeg";
import crmp2 from "../assets/crmp2.jpeg";
import crmp3 from "../assets/crmp3.jpeg";

const Hero = () => {
  return (
    <div className="w-full h-[42rem] flex items-center justify-between px-8 overflow-hidden"
      style={{
        background: "linear-gradient(to top, #F2F2F2, #EAEAEA, #DBDBDB)",
        position: 'relative',
      }}
    >
      <div className="max-w-xl text-left ml-14">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          Manage Your Customers.<br />Smarter, Not Harder.
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          Build better relationships with a beautifully simple customer management tool.
        </motion.p>
        <motion.div 
          className="flex gap-6 mt-8"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <button className='bg-black text-white rounded-md px-5 py-2 hover:scale-105 transition duration-300'>
            Start For Free
          </button>

          <button className='text-blue-600 text-base hover:text-black flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round" className="rotate-90">
                    <path d="M12 2v10" />
                    <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
            </svg>
                Schedule a Demo
          </button>
        </motion.div>
      </div>

      <div className="relative hidden md:block w-full h-full overflow-hidden"
        style={{
          position: 'absolute',
          right: 0,
          top: '72%',
          transform: 'translateY(-50%)',
          width: '60%',
          height: '120%',
          perspective: '1000px'
        }}
      >
        <motion.img
          src={crmp1}
          alt="CRM screenshot 1"
          initial={{ opacity: 0, filter: "blur(16px)", y: 20, scale: 1.4 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1.3 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute w-[30rem] rounded-md shadow-2xl z-30 transition-all duration-300 hover:z-40 hover:scale-105"
          style={{
            top: '28%',
            right: '-1%',
            transform: 'rotate(6deg) scale(1.2)',
            transformOrigin: 'bottom right'
          }}
        />

        <motion.img
          src={crmp2}
          alt="CRM screenshot 2"
          initial={{ opacity: 0, filter: "blur(16px)", y: 20, scale: 1.4 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1.3 }}
          transition={{ delay: 1.0, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute w-[28rem] rounded-md shadow-2xl z-20 transition-all duration-300 hover:z-40 hover:scale-105"
          style={{
            top: '58%',
            right: '19%',
            transform: 'rotate(6deg) scale(1.4)',
            transformOrigin: 'bottom right'
          }}
        />

        <motion.img
          src={crmp3}
          alt="CRM screenshot 3"
          initial={{ opacity: 0, filter: "blur(16px)", y: 20, scale: 1.4 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1.3 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute w-[26rem] rounded-md shadow-2xl z-50 transition-all duration-300 hover:z-40 hover:scale-105"
          style={{
            top: '55%',
            right: '-19%',
            transform: 'rotate(6deg) scale(1.2)',
            transformOrigin: 'bottom right'
          }}
        />
      </div>
    </div>
  );
};

export default Hero;