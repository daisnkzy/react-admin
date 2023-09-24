import React from 'react';

import ChartBox from '../../features/dashboard/chartbox/ChartBox';

import './dashboard.scss';
import { chartboxes } from '../../data/datas';
import Piechart from '../../features/dashboard/piechart/Piechart';
import Linechart from '../../features/dashboard/linechart/Linechart';
import Barchart from '../../features/dashboard/barchart/Barchart';
const DashBoard = () => {
  return (
    <>
      <h2>主页</h2>
      <div className="dashboard-layout">
        {chartboxes.map((box) => (
          <ChartBox
            key={box.name}
            name={box.name}
            Icon={box.icon}
            number={box.number}
          />
        ))}

        <div className="chart-pie">
          <Piechart />
        </div>

        <div className="chart-line">
          <Linechart />
        </div>
        <div className="chart-bar">
          <Barchart />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
