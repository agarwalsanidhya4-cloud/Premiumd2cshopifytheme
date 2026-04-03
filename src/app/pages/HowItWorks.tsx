import { Clock, ShoppingBag, Truck, Heart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Clock,
      title: 'Daily Drop at Midnight',
      description: 'Every night at 12:00 AM IST, we unveil one exclusive ethnic wear piece. Set your alarm and be ready.'
    },
    {
      icon: ShoppingBag,
      title: 'Limited Availability',
      description: 'Each piece is crafted in extremely limited quantities. Once the fabric runs out, that design is gone forever.'
    },
    {
      icon: Truck,
      title: 'Made-to-Order Excellence',
      description: 'After you order, our artisans in Surat begin handcrafting your piece. Delivery takes 10-12 days.'
    },
    {
      icon: Heart,
      title: 'Own Something Rare',
      description: 'You\'re not just buying clothing—you\'re owning a piece of wearable art that few others will ever have.'
    }
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            How It Works
          </h1>
          <p className="text-gray-300 text-lg font-['Montserrat'] max-w-2xl mx-auto">
            12AM ETHNIC is not your typical shopping experience. Here's how our daily drop model works.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#D4AF37] font-bold mb-2 font-['Montserrat']">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-['Playfair_Display']">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-['Montserrat']">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-black/40 border border-gray-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-['Playfair_Display']">
            Your 12AM ETHNIC Timeline
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-[#D4AF37] font-bold font-['Montserrat']">
                11:59 PM
              </div>
              <div className="flex-1 border-l-2 border-[#D4AF37] pl-6 pb-6">
                <h4 className="font-semibold text-white mb-2 font-['Montserrat']">Get Ready</h4>
                <p className="text-gray-400 font-['Montserrat']">
                  The website shows a countdown. Previous day's product is about to vanish.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-[#D4AF37] font-bold font-['Montserrat']">
                12:00 AM
              </div>
              <div className="flex-1 border-l-2 border-[#D4AF37] pl-6 pb-6">
                <h4 className="font-semibold text-white mb-2 font-['Montserrat']">The Drop</h4>
                <p className="text-gray-400 font-['Montserrat']">
                  New product revealed! Browse details, see the fabric meter, and decide quickly.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-[#D4AF37] font-bold font-['Montserrat']">
                Day 1-2
              </div>
              <div className="flex-1 border-l-2 border-[#D4AF37] pl-6 pb-6">
                <h4 className="font-semibold text-white mb-2 font-['Montserrat']">High Demand</h4>
                <p className="text-gray-400 font-['Montserrat']">
                  Fabric meter drops fast. Don't wait too long or you'll miss out.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-[#D4AF37] font-bold font-['Montserrat']">
                Order Day
              </div>
              <div className="flex-1 border-l-2 border-[#D4AF37] pl-6 pb-6">
                <h4 className="font-semibold text-white mb-2 font-['Montserrat']">Secure Your Piece</h4>
                <p className="text-gray-400 font-['Montserrat']">
                  Complete prepaid checkout. Our artisans receive your order and begin crafting.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-[#D4AF37] font-bold font-['Montserrat']">
                10-12 Days
              </div>
              <div className="flex-1 pl-6">
                <h4 className="font-semibold text-white mb-2 font-['Montserrat']">Delivery</h4>
                <p className="text-gray-400 font-['Montserrat']">
                  Your handcrafted masterpiece arrives at your doorstep, ready to make you shine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Playfair_Display']">
            Ready to Join the Experience?
          </h2>
          <p className="text-gray-300 mb-8 font-['Montserrat']">
            Check out today's drop and secure your exclusive piece before it's gone.
          </p>
          <a
            href="/"
            className="inline-block bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 font-['Montserrat']"
          >
            View Today's Drop
          </a>
        </div>
      </div>
    </div>
  );
}
