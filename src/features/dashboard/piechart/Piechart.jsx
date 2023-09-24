import React from 'react';
import ReactEcharts from 'echarts-for-react';

import './piechart.scss';

const options = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
    // doesn't perfectly work with our tricks, disable it
    selectedMode: false,
  },
  series: [
    {
      name: '周营业额',
      type: 'pie',
      radius: ['40%', '90%'],
      center: ['50%', '85%'],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.percent * 2 + '%)';
        },
      },
      data: [
        { value: 1048, name: '周一' },
        { value: 735, name: '周二' },
        { value: 580, name: '周三' },
        { value: 484, name: '周四' },
        { value: 300, name: '周五' },
        {
          // make an record to fill the bottom 50%
          value: 1048 + 735 + 580 + 484 + 300,
          itemStyle: {
            // stop the chart from rendering this piece
            color: 'none',
            decal: {
              symbol: 'none',
            },
          },
          label: {
            show: false,
          },
        },
      ],
    },
  ],
};

const Piechart = () => {
  return (
    <ReactEcharts
      option={options}
      style={{ width: '500px', height: '300px' }}
    ></ReactEcharts>
  );
};

export default Piechart;
