import { useLocation } from 'react-router';
import { Package } from 'lucide-react';

export function StickyBuyButton() {
  const location = useLocation();

  // Only show on home page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#001b3a]/98 backdrop-blur-md border-t-2 border-[#D4AF37]/50 p-4 z-50 shadow-2xl">
      <button className="w-full bg-[#D4AF37] text-[#001b3a] font-bold py-4 rounded-xl text-lg font-['Montserrat'] flex items-center justify-center gap-3 active:scale-95 transition-transform">
        <Package className="w-5 h-5" />
        SECURE YOUR PIECE
      </button>
    </div>
  );
}
