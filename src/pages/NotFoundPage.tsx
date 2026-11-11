import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="font-mono text-sm font-bold text-[#14685D] uppercase mb-2">404</div>
      <h1 className="text-3xl font-extrabold text-[#172630]">Page not found</h1>
      <p className="mt-3 text-base text-[#52616B]">
        The page you are looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#14685D] text-white text-sm font-semibold rounded-md hover:bg-[#0F534A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to homepage</span>
        </Link>
      </div>
    </div>
  );
};
