import React, { useState } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  onNavClick: (item: string) => void;
  activeNav: string;
}

export const HavenLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5a4.5 4.5 0 0 0-4-4.47 7 7 0 0 0-13 1.47 4.5 4.5 0 0 0 .5 8.5h12z"/>
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onNavClick, activeNav }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'Usecases', 'Pricing', 'Careers', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 sm:pt-8 px-4 pointer-events-none">
      {/* Top Floating Panel matching reference image */}
      <nav 
        id="top-floating-panel"
        className="pointer-events-auto bg-white/10 backdrop-blur-md text-white rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-2xl flex items-center justify-between gap-6 sm:gap-10 max-w-4xl w-full border border-white/20 transition-all duration-300"
      >
        {/* Logo */}
        <button 
          onClick={() => onNavClick('Home')}
          className="flex items-center gap-2 font-bold text-lg tracking-tight text-white hover:opacity-80 transition-opacity cursor-pointer"
          id="nav-logo-btn"
        >
          <HavenLogo className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-semibold text-white text-lg">Rishit</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              id={`nav-link-${item.toLowerCase()}`}
              onClick={() => onNavClick(item)}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                activeNav === item 
                  ? 'text-white font-semibold' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Login Button */}
        <div className="flex items-center gap-3">
          <button
            id="nav-login-btn"
            onClick={onLoginClick}
            className="bg-white hover:bg-transparent text-black hover:text-white border border-white hover:border-white/20 text-sm font-medium px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 hover:shadow-md cursor-pointer active:scale-95"
          >
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-1 rounded-lg"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-zinc-900/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 flex flex-col gap-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavClick(item);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                activeNav === item ? 'bg-white/20 text-white font-semibold' : 'text-white/70 hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
