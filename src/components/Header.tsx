import React from 'react';

const Header: React.FC = () => {
  const links = [
    { label: 'Resume', href: '/matt-whalley-resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/mttwhlly' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mttwhlly' },
  ];

  return (
    <header className="w-full max-w-2xl mx-auto px-6 pt-12 pb-8 flex items-center justify-between gap-4">
      <a href="/" className="font-mono text-sm text-gray-900 dark:text-gray-100">
        Matt Whalley
      </a>
      <nav className="flex gap-4 text-sm font-mono text-gray-400 dark:text-gray-500">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 hover:underline underline-offset-2 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
