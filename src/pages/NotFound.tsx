import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
const NotFound: React.FC = () => {
  return <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>
      <Button href="/">Return to Homepage</Button>
    </div>;
};
export default NotFound;