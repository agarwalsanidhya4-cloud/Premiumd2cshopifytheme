import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold font-['Montserrat']">12</span>
              </div>
              <span className="font-semibold font-['Montserrat'] text-black">12AM ETHNIC</span>
            </div>
            <p className="text-gray-600 text-sm font-['Montserrat']">
              Handcrafted ethnic wear. One exclusive piece, every midnight.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 font-['Montserrat'] text-black">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                Today's Drop
              </Link>
              <Link to="/archive" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                Archive
              </Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 font-['Montserrat'] text-black">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold mb-4 font-['Montserrat'] text-black">Account</h4>
            <div className="flex flex-col gap-2">
              <Link to="/account" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                My Account
              </Link>
              <Link to="/cart" className="text-gray-600 hover:text-black text-sm font-['Montserrat'] transition-colors">
                Cart
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm font-['Montserrat']">
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
