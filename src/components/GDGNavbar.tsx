import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-[60px] w-full bg-transparent">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-black">LOGO</span>
        <span className="text-[10px] font-bold mb-auto ml-1">TM</span>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {['ABOUT US', 'UPCOMING EVENTS', 'GALLERY', 'SPECTRUM'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[13px] font-medium text-black/70 hover:text-black transition-colors uppercase tracking-wide"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Side: Join Us Button */}
      <div className="hidden md:block">
        <button className="bg-[#333333] text-white text-[14px] font-medium px-6 py-2.5 rounded-lg shadow-lg hover:bg-black transition-colors">
          Join Us!
        </button>
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden text-black cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </nav>
  );
}
