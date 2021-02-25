import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: "#37B04C",
      borderColor: "#37B04C",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
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
              position:'right'
            }
          }}
        />
      </div>
    );
}