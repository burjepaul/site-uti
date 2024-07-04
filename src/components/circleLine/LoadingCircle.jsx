import React from 'react';
import PropTypes from 'prop-types';
import './LoadingCircle.scss';

const LoadingCircle = ({ percentage }) => {
  const strokeDasharray = `${percentage} 100`;

  return (
    <div className="loading-circle-container">
      <svg className="loading-circle" viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle-fg"
          strokeDasharray={strokeDasharray}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

LoadingCircle.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default LoadingCircle;
