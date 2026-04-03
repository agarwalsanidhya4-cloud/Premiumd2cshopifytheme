import { CountdownTimer } from '../components/CountdownTimer';
import { ProgressBar } from '../components/ProgressBar';
import { TrustBadges } from '../components/TrustBadges';
import { TheVault } from '../components/TheVault';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronDown, Sparkles, Package } from 'lucide-react';

export function Home() {
  const product = {
    name: 'Royal Peacock Silk Lehenga',
    tagline: 'Handwoven Heritage • Limited Edition',
    price: '₹24,999',
    originalPrice: '₹34,999',
    fabricLeft: 15,
    totalFabric: 50,
    image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    description: 'An exquisite turquoise and gold lehenga set featuring intricate zardozi work and hand-embroidered peacock motifs. This masterpiece takes 240+ hours of skilled craftsmanship.',
    details: {
      fabric: 'Pure Banarasi Silk with Gold Zari',
      work: 'Hand Embroidery, Zardozi, Stone Work',
      occasion: 'Weddings, Grand Celebrations',
      delivery: '10-12 Days (Made-to-Order)'
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl">
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#001b3a] px-4 py-2 rounded-full font-bold text-sm font-['Montserrat'] z-10">
                    TODAY'S DROP
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-['Montserrat'] z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>Exclusive</span>
                  </div>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] md:h-[700px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001b3a] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6 md:pt-8">
              <div>
                <p className="text-[#D4AF37] text-sm font-semibold mb-2 font-['Montserrat'] tracking-wider">
                  {product.tagline}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display'] leading-tight">
                  {product.name}
                </h2>
                <p className="text-gray-300 leading-relaxed font-['Montserrat']">
                  {product.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-[#D4AF37] font-['Playfair_Display']">
                  {product.price}
                </span>
                <span className="text-2xl text-gray-500 line-through font-['Montserrat']">
                  {product.originalPrice}
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold font-['Montserrat']">
                  SAVE 29%
                </span>
              </div>

              {/* Countdown Timer */}
              <div className="bg-black/40 border-2 border-[#D4AF37]/40 rounded-xl p-6">
                <p className="text-center text-sm text-gray-300 mb-4 font-['Montserrat']">
                  This Drop Vanishes In:
                </p>
                <CountdownTimer className="justify-center" />
              </div>

              {/* Progress Bar */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <ProgressBar
                  current={product.fabricLeft}
                  total={product.totalFabric}
                />
              </div>

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-900/50 rounded-lg p-4 border border-gray-800"
                  >
                    <p className="text-xs text-gray-400 mb-1 font-['Montserrat'] uppercase">
                      {key}
                    </p>
                    <p className="text-sm text-white font-['Montserrat'] font-medium">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button - Desktop */}
              <button className="hidden md:flex w-full bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold py-5 rounded-xl text-lg transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#D4AF37]/50 font-['Montserrat'] items-center justify-center gap-3">
                <Package className="w-6 h-6" />
                SECURE YOUR PIECE NOW
              </button>

              {/* Scroll Indicator */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 animate-bounce pt-4 font-['Montserrat']">
                <span>Scroll to see past drops</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* The Vault - FOMO Section */}
      <TheVault />
    </>
  );
}
