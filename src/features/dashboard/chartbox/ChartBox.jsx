import React from 'react';
import './chartbox.scss';
const ChartBox = ({ name, Icon, number }) => {
  return (
    <div className="chart-box-single">
      <div className="icon">
        <Icon className="svg" />
      </div>
      <div className="number">{number}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default ChartBox;
