import React, { useState } from 'react';
import {
  AddressBook,
  File,
  List,
  X,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  UserFocus,
} from '@phosphor-icons/react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Disable body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      // Prevent scroll on touch devices
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup function to ensure scroll is re-enabled
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    // { label: 'About', href: '/about', icon: UserFocus },
    { label: 'Resume', href: '/matt-whalley-resume-20250718.pdf', icon: File },
    { label: 'User Manual', href: '/matt-whalley-user-manual-20250729v2.pdf', icon: AddressBook },
    // { label: 'Workspace', href: '' },
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/mttwhlly',
      icon: GithubLogo,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mttwhlly',
      icon: LinkedinLogo,
    },
    {
      label: 'Email',
      href: 'mailto:&#109;&#97;&#116;&#116;&#64;&#109;&#97;&#116;&#116;&#119;&#104;&#97;&#108;&#108;&#101;&#121;&#46;&#99;&#111;&#109;',
      icon: PaperPlaneTilt,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo/Title */}
          <a
            href="/"
            className="flex items-center text-xl font-sans font-medium text-gray-900 hover:text-gray-700 transition-colors"
            onClick={closeMenu}
          >
            <img
              src="/images/profile.jpeg"
              alt="Matt Whalley"
              className="rounded-full w-8 h-8 mr-2"
            />
            Matt Whalley
          </a>
          <div className="flex justify-between">
            <div className="text-gray-400 font-mono uppercase tracking-wider text-sm flex items-center gap-3 mr-4">
              <div className="relative inline-block">
                {/* Inner solid circle */}
                <div className="w-2 h-2 bg-[#D4FC52] rounded-full"></div>
                {/* Outer pulsing circle */}
                <div className="absolute inset-0 w-3 h-3 bg-[#D4FC52] rounded-full opacity-30 animate-pulse -translate-x-0.5 -translate-y-0.5"></div>
              </div>
              Open to Work
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed ${isMenuOpen ? 'top-[72px]' : ''} left-0 right-0 z-40 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className={`${isMenuOpen ? 'min-h-[calc(100vh-72px)]' : 'min-h-0'} flex flex-col`}>
          {/* Navigation Links */}
          <nav className="flex-1 p-4 max-w-4xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              {/* Navigation Column */}
              <div className="space-y-1">
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-6">
                  Resources
                </h3>
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 px-3 py-4 text-2xl font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={closeMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={24} className="text-gray-600" />
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Social Links Column */}
              <div className="space-y-1">
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-6">
                  Connect
                </h3>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 px-3 py-4 text-2xl font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={closeMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={24} className="text-gray-600" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-gray-500 text-center">© Matt Whalley, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
