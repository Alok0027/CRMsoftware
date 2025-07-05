import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import googlelogo from '../assets/googlelogo.png';
import twitterlogo from '../assets/twitterlogo.png';
import amazonlogo from '../assets/amazonlogo.png';
import shopifylogo from '../assets/shopifylogo.png';
import adminlogo from '../assets/adminlogo.png';
import admoblogo from '../assets/admoblogo.png';

import john from '../assets/john.png';
import william from '../assets/william.png';
import micheal from '../assets/micheal.png';
import sarah from '../assets/sarah.png';

const testimonials = [
  {
    title: '2X growth in just two months',
    quote: '“Optimum has been a game-changer for my business. Thanks to their powerful platform, I’ve been able to increase my website’s conversion rates by over 50% in just a few weeks. The insights and recommendations provided by Optimum are invaluable, and their user-friendly interface makes it easy to implement changes and see results.”',
    name: 'John Kennedy',
    role: 'CEO & Co-founder',
    avatar: john,
    logo: googlelogo,
  },
  {
    title: '30% increase in conversion rate',
    quote: '“As someone who’s not tech-savvy, I was hesitant to try Optimum at first. But I’m so glad I did. The platform is incredibly intuitive, and the team behind it is always available to answer questions and offer support. Since I started using Optimum, my website’s conversion rates have skyrocketed. I highly recommend it!”',
    name: 'William Smith',
    role: 'CEO & Co-founder',
    avatar: william,
    logo: twitterlogo,
  },
  {
    title: '50k+ new user added',
    quote: '“I’ve tried a lot of conversion rate optimization tools over the years, but Optimum is by far the best. The platform is comprehensive, easy to use, and delivers results. I especially appreciate how Optimum provides personalized recommendations based on my website’s unique needs. If you’re serious about optimizing your conversion rates, Optimum is a must-have tool.”',
    name: 'Michael Brown',
    role: 'CEO & Co-founder',
    avatar: micheal,
    logo: amazonlogo,
  },
  {
    title: '400% increase in sales over 8 months',
    quote: '“Before using Optimum, our website’s conversion rate was stagnant. But after implementing their suggested changes, we saw a 25% increase in conversions within the first month alone. The platform is easy to use and the insights provided are invaluable. I highly recommend Optimum to anyone looking to improve their online conversions.”',
    name: 'Sarah Jonas',
    role: 'CEO & Co-founder',
    avatar: sarah,
    logo: shopifylogo,
  },
  {
    title: '400% increase in sales over 8 months',
    quote: '“Before using Optimum, our website’s conversion rate was stagnant. But after implementing their suggested changes, we saw a 25% increase in conversions within the first month alone. The platform is easy to use and the insights provided are invaluable. I highly recommend Optimum to anyone looking to improve their online conversions.”',
    name: 'Sarah Jonas',
    role: 'CEO & Co-founder',
    avatar: sarah,
    logo: adminlogo,
  },
  {
    title: '50k+ new user added',
    quote: '“I’ve tried a lot of conversion rate optimization tools over the years, but Optimum is by far the best. The platform is comprehensive, easy to use, and delivers results. I especially appreciate how Optimum provides personalized recommendations based on my website’s unique needs. If you’re serious about optimizing your conversion rates, Optimum is a must-have tool.”',
    name: 'Michael Brown',
    role: 'CEO & Co-founder',
    avatar: micheal,
    logo: admoblogo,
  },
];

const Testimonial = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            What our customers <br /> say about us
          </h2>
          <div className="flex space-x-4">
            <button onClick={scrollLeft} className="p-3 border rounded-full hover:bg-gray-100">
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button onClick={scrollRight} className="p-3 border rounded-full hover:bg-gray-100">
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[320px] sm:w-[400px] min-h-96 bg-white border rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {testimonial.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4">
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <img className="w-8 h-8" src={testimonial.logo} alt="company logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;