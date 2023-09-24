import React from 'react';
import ReactEcharts from 'echarts-for-react';

import './linechart.scss';
const option = {
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};

const Linechart = () => {
  return (
    <ReactEcharts
      option={option}
      style={{ width: '550px', height: '270px' }}
    ></ReactEcharts>
  );
};

export default Linechart;
