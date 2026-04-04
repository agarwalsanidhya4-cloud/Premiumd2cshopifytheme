import { CountdownTimer } from '../components/CountdownTimer';
import { ProgressBar } from '../components/ProgressBar';
import { TrustBadges } from '../components/TrustBadges';
import { TheVault } from '../components/TheVault';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

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
      Fabric: 'Pure Banarasi Silk with Gold Zari',
      Work: 'Hand Embroidery, Zardozi, Stone Work',
      Occasion: 'Weddings, Grand Celebrations',
      Delivery: '10-12 Days (Made-to-Order)'
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-3 font-['Montserrat'] tracking-wider uppercase">
              Today's Drop
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 font-['Montserrat'] leading-tight text-black">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Montserrat']">
              {product.description}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-28">
                <div className="relative rounded-none overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[600px] md:h-[700px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Pricing */}
              <div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-medium text-black font-['Montserrat']">
                    {product.price}
                  </span>
                  <span className="text-2xl text-gray-400 line-through font-['Montserrat']">
                    {product.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-['Montserrat']">
                  100% prepaid • Free shipping • 10-12 day delivery
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="border border-gray-200 rounded-sm p-6 bg-gray-50">
                <p className="text-center text-sm text-gray-600 mb-4 font-['Montserrat']">
                  Available for
                </p>
                <CountdownTimer className="justify-center" />
              </div>

              {/* Progress Bar */}
              <div className="border border-gray-200 rounded-sm p-6">
                <ProgressBar
                  current={product.fabricLeft}
                  total={product.totalFabric}
                />
              </div>

              {/* CTA Button */}
              <button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-5 rounded-sm text-base transition-all font-['Montserrat'] flex items-center justify-center gap-3">
                Buy Now
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Product Details */}
              <div className="space-y-3 pt-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 border-b border-gray-200"
                  >
                    <p className="text-sm text-gray-500 font-['Montserrat']">
                      {key}
                    </p>
                    <p className="text-sm text-black font-['Montserrat'] font-medium text-right max-w-[60%]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* The Vault - FOMO Section */}
      <TheVault />
    </>
  );
}
