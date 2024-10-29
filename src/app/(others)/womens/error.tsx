'use client'
import React from 'react';

interface ErrorProps {
  message: string;
  onRetry: () => void;
}

const Error: React.FC<ErrorProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-4">
      <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
      <p className="mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
