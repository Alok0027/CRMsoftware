import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaMicrosoft } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
    // You can add real auth later here
    navigate('/dashboard');
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      {/* Logo + Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">CRM SAMPLE</h1>
      <p className="text-sm text-gray-500">
        Don’t have an account?{' '}
        <Link className="text-blue-500 font-medium mt-4" to="#">
          Get started free
        </Link>
      </p>

      {/* Message Box */}
      <div className="mt-6 border border-blue-200 bg-blue-50 px-6 py-4 rounded text-center text-sm text-gray-600 w-3/4">
        <strong>Login faster and safer to your HubSpot account</strong>
        <p className="text-sm mt-1">
          Next time we’ll remember how you’d like to sign in so you can skip entering an email.
          You can always go back to{' '}
          <span className="text-blue-500 font-medium cursor-pointer">classic login</span>.
        </p>
      </div>

      {/* Form + Social Login Grid */}
      <div className="mt-12 flex items-center justify-between w-full max-w-4xl">
        {/* Email Form */}
        <div className="w-5/12">
          <label className="block text-sm text-gray-700 mb-1">Email address</label>
          <input
            type="email"
            className="w-full border rounded px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Enter your email"
          />
          <button
      onClick={handleLogin}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
    >
      Next
    </button>
        </div>

        {/* Vertical Separator with OR */}
        <div className="relative h-48 flex items-center">
          <div className="h-full w-px bg-gray-200"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-400 font-medium">
            OR
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="w-5/12 space-y-3">
          <button className="w-full flex items-center gap-3 justify-center border rounded py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
            <FcGoogle className="text-xl" /> Sign in with Google
          </button>
          <button className="w-full flex items-center gap-3 justify-center border rounded py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
            <FaMicrosoft className="text-blue-600 text-xl" /> Sign in with Microsoft
          </button>
          <button className="w-full flex items-center gap-3 justify-center border rounded py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
            <FaApple className="text-black text-xl" /> Sign in with Apple
          </button>
          <button className="w-full flex items-center gap-3 justify-center border rounded py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
            Log in with SSO
          </button>
        </div>
      </div>

      {/* Bottom Prompt */}
      <div className="mt-14 text-center text-sm text-gray-700 space-y-3">
        <p>
          Get a demo of our premium software or upgrade
          <br />
          your free account today by buying Starter
        </p>
        <div className="flex justify-center gap-4">
          <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-50">
            Get a demo
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-50">
            Buy Starter
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-xs text-gray-400 text-center">
        ©2025 HubSpot, Inc. All Rights Reserved.{' '}
        <a href="#" className="text-blue-500 underline">
          Privacy Policy
        </a>{' '}
        &nbsp;•&nbsp;
        <a href="#" className="text-blue-500 underline">
          Manage Cookies
        </a>
      </div>
    </div>
  );
};

export default Login;