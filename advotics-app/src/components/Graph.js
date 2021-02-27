import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Jan 12', 'Tue', 'Wed',
           'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Net',
      backgroundColor: "#37B04C",
      borderColor: "#37B04C",
      borderWidth: 2,
      maxBarThickness: 40,
      data: [21000, 20000, 21000, 19000, 18000, 17000, 21000]
    },
    {
      label: 'Gross',
      backgroundColor: "#289E45",
      borderColor: "#289E45",
      borderWidth: 2,
      maxBarThickness: 40,
      data: [21000, 20000, 21000, 19000, 18000, 17000, 21000]
    },
    {
      label: 'Average Purchase Value',
      backgroundColor: "#7AE28C",
      borderColor: "#7AE28C",
      borderWidth: 2,
      maxBarThickness: 40,
      data: [21000, 20000, 21000, 19000, 18000, 17000, 21000]
    },
    {
      label: 'Unit per Transaction',
      backgroundColor: "#707070",
      borderColor: "#707070",
      borderWidth: 2,
      maxBarThickness: 40,
      data: [65, 59, 80, 81, 56, 24, 45]
    }
  ]
}

export default function Graph() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:false
            },
            legend:{
              display:true,
              position:'bottom'
            },
            scales: {
              xAxes: [{
                  stacked: true
              }],
              yAxes: [{
                  stacked: true
              }]
            },
            tooltips: {
              mode: 'label'
            }
          }}
        />
      </div>
    );
}