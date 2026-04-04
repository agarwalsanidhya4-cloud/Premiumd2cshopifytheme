import { useLocation } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function StickyBuyButton() {
  const location = useLocation();

  // Only show on home page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 p-4 z-50">
      <button className="w-full bg-black text-white font-medium py-4 rounded-sm font-['Montserrat'] flex items-center justify-center gap-3 active:scale-95 transition-transform">
        Buy Now
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
