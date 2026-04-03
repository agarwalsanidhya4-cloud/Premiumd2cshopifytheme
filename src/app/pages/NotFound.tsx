import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12 min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-bold text-[#D4AF37] mb-4 font-['Playfair_Display']">
          404
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 font-['Playfair_Display']">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 font-['Montserrat'] max-w-md mx-auto">
          Just like our sold-out drops, this page has vanished. But unlike our drops, this one wasn't supposed to disappear.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 font-['Montserrat']"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
