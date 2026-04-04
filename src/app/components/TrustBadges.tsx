import { ShieldCheck, Sparkles, Lock } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Sparkles,
      title: 'Handcrafted in Surat',
      description: 'Artisan quality'
    },
    {
      icon: Lock,
      title: '100% Prepaid Secure',
      description: 'Encrypted checkout'
    },
    {
      icon: ShieldCheck,
      title: 'Made-to-Order',
      description: 'Exclusive for you'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center gap-3 p-6 border border-gray-200 rounded-sm hover:border-black transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <badge.icon className="w-6 h-6 text-black" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-black font-['Montserrat'] mb-1">
              {badge.title}
            </h4>
            <p className="text-xs text-gray-500 font-['Montserrat']">
              {badge.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
