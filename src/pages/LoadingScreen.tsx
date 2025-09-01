"use client";

import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-stone-900">
      {/* Pingująca kropka */}
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-indigo-600 animate-ping absolute"></div>
        <div className="h-16 w-16 rounded-full bg-indigo-600 relative"></div>
      </div>

      {/* Tekst ładowania */}
      <p className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-200">
        Ładowanie...
      </p>
    </div>
  );
};

export default LoadingScreen;
