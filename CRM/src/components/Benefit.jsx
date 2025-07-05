import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import crmpic1 from '../assets/crmpic1.png';
import route from '../assets/route.svg';
import bene1 from '../assets/bene1.png';
import bene2 from '../assets/bene2.png';

const Benefit = () => {
  const line1Ref = useRef();
  const line23Ref = useRef();
  const line4Ref = useRef();

  const [initialAnimate, setInitialAnimate] = useState(true);
  const [activeLine, setActiveLine] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setInitialAnimate(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const screenMiddle = window.innerHeight / 2;

      const rect1 = line1Ref.current.getBoundingClientRect();
      if (rect1.top <= screenMiddle && rect1.bottom >= screenMiddle) {
        setActiveLine(1);
        return;
      }

      const rect23 = line23Ref.current.getBoundingClientRect();
      if (rect23.top <= screenMiddle && rect23.bottom >= screenMiddle) {
        setActiveLine(23);
        return;
      }

      const rect4 = line4Ref.current.getBoundingClientRect();
      if (rect4.top <= screenMiddle && rect4.bottom >= screenMiddle) {
        setActiveLine(4);
        return;
      }

      setActiveLine(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Animated Text Hero Section */}
      <section className="w-full min-h-screen text-black flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 gap-y-12 md:gap-x-20">
        {/* Left side - Screenshot */}
        <div className="w-full md:w-[75%] lg:w-[80%] flex justify-center mb-12 md:mb-0">
          <img
            src={crmpic1}
            alt="CRM UI preview"
            className="rounded-2xl w-full max-w-[1200px] object-contain"
          />
        </div>

        {/* Right side - Text lines */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          {/* Line 1 */}
          <h1
            ref={line1Ref}
            className={`text-3xl md:text-5xl font-semibold leading-tight transition duration-500 ${
              activeLine === 1 || initialAnimate ? 'text-black' : 'text-gray-500'
            }`}
          >
            Grow{' '}
            <span
              className={`${
                activeLine === 1 || initialAnimate
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 font-bold'
                  : ''
              }`}
            >
              your sales
            </span>{' '}
            faster.
          </h1>

          {/* Line 2 */}
          <h1
            ref={line23Ref}
            className={`text-3xl md:text-5xl font-semibold leading-tight transition duration-300 ${
              activeLine === 23 ? 'text-black' : 'text-gray-500'
            }`}
          >
            Be more responsive to
          </h1>

          {/* Line 3 */}
          <h1
            className={`text-3xl md:text-5xl font-semibold leading-tight transition duration-300 ${
              activeLine === 23 ? 'text-black' : 'text-gray-500'
            }`}
          >
            <span
              className={`${
                activeLine === 23
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 font-bold'
                  : ''
              }`}
            >
              what matters
            </span>{' '}
            most.
          </h1>

          {/* Line 4 */}
          <h1
            ref={line4Ref}
            className={`text-3xl md:text-5xl font-semibold leading-tight transition duration-300 ${
              activeLine === 4 ? 'text-black' : 'text-gray-500'
            }`}
          >
            Collaborate smarter, sell better, and close{' '}
            <span
              className={`${
                activeLine === 4
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 font-bold'
                  : ''
              }`}
            >
              faster.
            </span>
          </h1>
        </div>
      </section>

      {/* Follow-up Flow Section */}
      <section className="w-full bg-white py-20 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4 leading-snug"
        >
          <span className="italic font-bold text-black">Never miss out on a </span>
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 font-bold relative inline-block">
            follow-up
            <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 opacity-40 rounded-full -z-10 rotate-1"></span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-10"
        >
          <span className="font-semibold text-gray-800">
            Schedule calls, meetings, mailings, or quotations
          </span>
          , and Odoo automatically plans the next activity based on your sales script.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={route}
            alt="Follow-up flow"
            className="w-full max-w-5xl rounded-xl mt-4"
          />
        </motion.div>
      </section>
      {/* Sales Pipeline Section */}
{/* Sales Pipeline Section (side-by-side) */}
<section className="w-full py-20 px-6 md:px-16 bg-white">
<div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full md:w-[90%] ml-auto pr-8 md:pr-20">    
    {/* Left: Text */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-center md:text-left"
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
        Smartly visualize your sales pipeline.
      </h2>
      <p className="text-gray-600 text-lg md:text-xl">
        Keep track of every lead, opportunity, and interaction — all in one dynamic, drag-and-drop interface.
        <br />
        Easily switch stages, assign tasks, and gain instant insights with a visual layout built for speed and clarity.
      </p>
    </motion.div>

    {/* Right: Image */}
   <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full md:w-1/2 flex justify-center"
>
  <img
    src={bene1}
    alt="Sales Pipeline Visual"
    className="w-full bg-gray-900 right-9 ml-72 [mask-image:linear-gradient(to_bottom,transparent,black_75%)]"
  />
</motion.div>
    
  </div>
</section>

{/* Customer Insights Section */}
<section className="w-full py-20 px-6 md:px-16 bg-white">
  <div className="flex flex-col md:flex-row items-center gap-12 w-full md:w-[90%] mr-auto pl-8 md:pl-20">
    {/* Left: Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 flex justify-center"
    >
      <img
        src={bene2}
        alt="Customer Insights Visual"
        className="w-full bg-gray-900 mr-72 [mask-image:linear-gradient(to_bottom,transparent,black_75%)]"
      />
    </motion.div>

    {/* Right: Text */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-center md:text-left"
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
        Unlock Deeper Customer Insights.
      </h2>
      <p className="text-gray-600 text-lg md:text-xl">
        Go beyond basic data. Our CRM provides comprehensive analytics and reporting tools to help you understand customer behavior, track performance, and make data-driven decisions that fuel growth.
      </p>
    </motion.div>
  </div>
</section>
    </>
  );
};

export default Benefit;