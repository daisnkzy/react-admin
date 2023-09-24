import React from 'react';
import ReactEcharts from 'echarts-for-react';

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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
};
const Barchart = () => {
  return (
    <ReactEcharts
      option={option}
      style={{ width: '500px', height: '250px' }}
    ></ReactEcharts>
  );
};

export default Barchart;
