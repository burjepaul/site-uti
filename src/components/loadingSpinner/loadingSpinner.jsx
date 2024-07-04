import React, { useState, useEffect } from 'react';
import './loadingSpinner.styles.scss';
import CircleOfDots from '../circleOfDots/circleOfDots';
import LoadingCircle from '../circleLine/LoadingCircle';

const LoadingBar = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    let handleResize
    if (window.innerWidth > 550){
      handleResize = () => setWidth(window.innerWidth);
    }else{
      handleResize = () => setWidth(550);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        const nextPercentage = prev + 10;
        if (nextPercentage >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextPercentage;
      });
    }, 200); // Simulates loading progress

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="loading-bar-container">
      </div>
        <div className="circle-container">
          <CircleOfDots dotCount={width/10} radius={width/5} dotSize={3}/>
          <LoadingCircle percentage={loadingPercentage}/>
        </div>
    </>
  );
};

export default LoadingBar;
