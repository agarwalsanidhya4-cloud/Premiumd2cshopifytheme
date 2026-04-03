import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Today\'s Drop' },
    { path: '/archive', label: 'Archive' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001b3a]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
              <span className="text-[#001b3a] font-bold text-xl font-['Playfair_Display']">12</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-['Playfair_Display'] text-[#D4AF37]">
                12AM ETHNIC
              </h1>
              <p className="text-xs text-gray-400 font-['Montserrat']">Daily Drop at Midnight</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-['Montserrat'] transition-colors relative ${
                  isActive(link.path)
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-300" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#D4AF37] text-[#001b3a] text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/account"
              className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-gray-300" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-['Montserrat'] transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold'
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
