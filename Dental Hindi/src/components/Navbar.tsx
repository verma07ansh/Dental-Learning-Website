import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="h-24"></div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between h-24">

            {/* DESKTOP: Left Logos */}
            <div className="hidden sm:flex items-center space-x-4">
              <img
                src="/assets/bird logo.jpg"
                alt="Logo 1"
                className="h-24 w-24 object-cover rounded-lg shadow-md"
              />
              <img
                src="/assets/naac.png"
                alt="Logo 2"
                className="h-24 w-24 object-contain rounded-lg shadow-md"
              />
            </div>

            {/* DESKTOP: Center Menu */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  मुख्य पृष्ठ
                </Link>
                <Link
                  to="/services"
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === '/services'
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  सेवाएँ
                </Link>
                <Link
                  to="/treatments"
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === '/treatments'
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  उपचार
                </Link>
                <Link
                  to="/map"
                  className={`text-lg font-medium px-2 py-1 rounded-md relative group inline-block ${
                    location.pathname === '/map'
                      ? 'text-red-500'
                      : 'text-red-500 hover:text-red-600'
                  }`}
                >
                  <span className="relative z-10 animate-bounce">स्थान खोजें</span>
                  <span className="absolute inset-0 bg-red-100/50 rounded-md blur-sm group-hover:bg-red-200/50 transition-all duration-300"></span>
                  <span className="absolute inset-0 rounded-md ring-2 ring-red-400/50 animate-pulse"></span>
                </Link>
              </div>
            </div>

            {/* DESKTOP: Right Logos */}
            <div className="hidden sm:flex items-center space-x-4">
              <img
                src="/assets/nabh.png"
                alt="Logo 3"
                className="h-24 w-24 object-cover rounded-lg shadow-md"
              />
              <img
                src="/assets/BVDU.png"
                alt="Logo 4"
                className="h-24 w-24 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* MOBILE: Logos + Menu (Equal Spacing) */}
            <div className="flex sm:hidden w-full justify-between items-center px-2">
              <div className="grid grid-cols-5 w-full gap-2 items-center">
                <img
                  src="/assets/bird logo.jpg"
                  alt="Logo 1"
                  className="h-20 w-24 object-contain rounded-md shadow"
                />
                <img
                  src="/assets/naac.png"
                  alt="Logo 2"
                  className="h-20 w-24 object-contain rounded-md shadow"
                />
                <img
                  src="/assets/nabh.png"
                  alt="Logo 3"
                  className="h-20 w-24 object-contain rounded-md shadow"
                />
                <img
                  src="/assets/BVDU.png"
                  alt="Logo 4"
                  className="h-20 w-24 object-contain rounded-md shadow"
                />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center justify-center p-2 text-gray-700 hover:text-blue-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                मुखपृष्ठ 
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                सेवाएँ
              </Link>
              <Link
                to="/treatments"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                उपचार
              </Link>
              <Link
                to="/map"
                className="block px-3 py-2 rounded-md text-base font-medium bg-red-50 relative group"
              >
              <span className="text-red-500 font-semibold animate-bounce">स्थान खोजें</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
