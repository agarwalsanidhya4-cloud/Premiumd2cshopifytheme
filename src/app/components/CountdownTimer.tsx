import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
}

export function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      const difference = midnight.getTime() - now.getTime();

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg px-4 py-3 min-w-[70px] text-center">
          <span className="text-3xl font-bold text-[#D4AF37] font-['Playfair_Display']">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
        </div>
        <span className="text-xs text-gray-400 mt-1 font-['Montserrat']">HOURS</span>
      </div>
      <span className="text-2xl text-[#D4AF37] font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg px-4 py-3 min-w-[70px] text-center">
          <span className="text-3xl font-bold text-[#D4AF37] font-['Playfair_Display']">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
        </div>
        <span className="text-xs text-gray-400 mt-1 font-['Montserrat']">MINUTES</span>
      </div>
      <span className="text-2xl text-[#D4AF37] font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg px-4 py-3 min-w-[70px] text-center">
          <span className="text-3xl font-bold text-[#D4AF37] font-['Playfair_Display']">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        <span className="text-xs text-gray-400 mt-1 font-['Montserrat']">SECONDS</span>
      </div>
    </div>
  );
}
