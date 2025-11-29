import React, { useEffect, useState } from 'react';

const TwinklingStars = () => {
  const [stars, setStars] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    const numStars = 200; // Increased star count for a fuller effect
    const newStars = [];

    for (let i = 0; i < numStars; i++) {
      const style: React.CSSProperties = {
        position: 'absolute',
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        backgroundColor: 'white',
        borderRadius: '50%',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 500}vh`, // Spread stars across a large vertical area
        animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
        animationDelay: `${Math.random() * 5}s`,
      };
      newStars.push(<div key={i} style={style}></div>);
    }
    setStars(newStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0; }
            50% { opacity: ${Math.random() * 0.7 + 0.2}; }
          }
          @keyframes scroll-stars {
            from { transform: translateY(0); }
            to { transform: translateY(-400vh); }
          }
          .stars-container {
            width: 100%;
            height: 500vh;
            position: absolute;
            top: 0;
            left: 0;
            animation: scroll-stars 180s linear infinite;
          }
        `}
      </style>
      <div className="stars-container">
        {stars}
      </div>
    </div>
  );
};

export default TwinklingStars;
