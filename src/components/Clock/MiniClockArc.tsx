import { useEffect, useState } from 'react';

export default function AnimatedClockArc({ minutes }: { minutes: number }) {
    const percent = Math.min(minutes / 60, 3);
    const fullRounds = Math.floor(percent);     

    const baseColor = '#3b82f6';  
    const extraColor = "#FFC800";
    const extraColor2 = '#ef4444';
    const [offset1, setOffset1] = useState(100);
    const [offset2, setOffset2] = useState(100);
    const [offset3, setOffset3] = useState(100);
    useEffect(() => {
      const targetOffset = 100 * (1 - Math.min(minutes / 60, 1));
      let frame = 0;
      const frames = 30;
      const startOffset = offset1;
      const delta = targetOffset - startOffset;

      const animate = () => {
        frame++;
        const progress = frame / frames;
        const eased = 1 - Math.pow(1 - progress, 3);
        setOffset1(startOffset + delta * eased);
        if (frame < frames) requestAnimationFrame(animate);
      };
      animate();
    }, [minutes]);

    useEffect(() => {
      if (minutes <= 60) {
        setOffset2(100);
        return;
      }
      const extraPercent = Math.min((minutes - 60) / 60, 1);
      const targetOffset = 100 * (1 - extraPercent);
      let frame = 0;
      const frames = 30;
      const startOffset = offset2;
      const delta = targetOffset - startOffset;

      const animate = () => {
        frame++;
        const progress = frame / frames;
        const eased = 1 - Math.pow(1 - progress, 3);
        setOffset2(startOffset + delta * eased);
        if (frame < frames) requestAnimationFrame(animate);
      };
      animate();
    }, [minutes]);
    useEffect(() => {
      if (minutes <= 120) {
        setOffset3(100);
        return;
      }
      const extraPercent = Math.min((minutes - 120) / 60, 1);
      const targetOffset = 100 * (1 - extraPercent);
      let frame = 0;
      const frames = 30;
      const startOffset = offset3;
      const delta = targetOffset - startOffset;

      const animate = () => {
        frame++;
        const progress = frame / frames;
        const eased = 1 - Math.pow(1 - progress, 3);
        setOffset3(startOffset + delta * eased);
        if (frame < frames) requestAnimationFrame(animate);
      };
      animate();
    }, [minutes]);
    return (
      <svg viewBox="0 0 36 36" className="w-16 h-16 lg:w-32 lg:h-32">
        <circle cx="18" cy="18" r="16" fill="none" stroke="#eee" strokeWidth="4" />
        {percent > 0 && (
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke={baseColor}
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={offset1}
            transform="rotate(-90 18 18)"
          />
        )}
        {fullRounds >= 1 && (
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke={extraColor}
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={offset2}
            transform="rotate(-90 18 18)"
          />
        )}
        {fullRounds >= 2 && (
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke={extraColor2}
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={offset3}
            transform="rotate(-90 18 18)"
          />
        )}
        <text x="18" y="20" textAnchor="middle" fontSize="6" fill="#333">
          {minutes}分待ち
        </text>
      </svg>
    );
}