import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2 bg-card/60 backdrop-blur-sm px-4 sm:px-6 py-4 rounded-lg border border-border/30 shadow-soft">
      <span className="font-playfair text-5xl sm:text-7xl font-bold text-black dark:text-black">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="font-inter text-sm sm:text-xl text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
      <TimeUnit value={timeLeft.days} label="Jours" />
      <TimeUnit value={timeLeft.hours} label="Heures" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Secondes" />
    </div>
  );
};

export default Countdown;
