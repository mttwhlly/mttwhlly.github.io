import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-2xl mx-auto px-6 pt-12 pb-16 flex items-center justify-between gap-4">
      <a href="/" className="font-mono text-sm text-gray-900 dark:text-gray-100">
        Matt Whalley
      </a>
    </header>
  );
};

export default Header;
