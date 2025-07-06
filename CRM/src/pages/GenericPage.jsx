import React from 'react';
import { useLocation } from 'react-router-dom';

const GenericPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const title = pathParts
    .map(part => part.replace(/-/g, ' '))
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' - ');

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{title}</h1>
        <p className="mt-4 text-xl text-gray-500">
          This is a placeholder page for the {title} section. Content will be added here later.
        </p>
      </div>
    </div>
  );
};

export default GenericPage;
