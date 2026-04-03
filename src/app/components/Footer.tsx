import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-[#001b3a] font-bold font-['Playfair_Display']">12</span>
              </div>
              <span className="font-bold font-['Playfair_Display'] text-[#D4AF37]">12AM ETHNIC</span>
            </div>
            <p className="text-gray-400 text-sm font-['Montserrat']">
              Handcrafted ethnic wear. One exclusive piece, every midnight.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 font-['Montserrat'] text-white">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                Today's Drop
              </Link>
              <Link to="/archive" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                Archive
              </Link>
              <Link to="/how-it-works" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 font-['Montserrat'] text-white">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold mb-4 font-['Montserrat'] text-white">Account</h4>
            <div className="flex flex-col gap-2">
              <Link to="/account" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                My Account
              </Link>
              <Link to="/cart" className="text-gray-400 hover:text-[#D4AF37] text-sm font-['Montserrat'] transition-colors">
                Cart
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm font-['Montserrat']">
            © 2026 12AM ETHNIC. Every piece is handcrafted with love in Surat.
          </p>
          <p className="text-gray-500 text-xs mt-2 font-['Montserrat']">
            New drop every midnight. Set your alarm.
          </p>
        </div>
      </div>
    </footer>
  );
}
