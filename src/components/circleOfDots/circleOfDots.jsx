import React from 'react';
import './circleofDots.scss';

const CircleOfDots = ({ dotCount = 12, radius = 200, dotSize = 10 }) => {
  const dots = Array.from({ length: dotCount });

  return (
    <div className="circle-of-dots">
      {dots.map((_, index) => {
        const angle = (index / dotCount) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="dot"
            style={{
              width: dotSize / 2,
              height: dotSize,
              left: `${50 + x}px`,
              top: `${50 + y}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CircleOfDots;
