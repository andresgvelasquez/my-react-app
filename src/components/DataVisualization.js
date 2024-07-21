import React from 'react';
import { Bar } from 'react-chartjs-2';
import BoxplotChart from './BoxplotChart';

const DataVisualization = ({ histogramData, boxplotData }) => {
  if (!histogramData) {
    return <p>No histogram data available.</p>;
  }

  let binCounts;
  if (typeof histogramData === 'string') {
    try {
      binCounts = JSON.parse(histogramData);
    } catch (e) {
      return <p>Error parsing histogram data.</p>;
    }
  } else {
    binCounts = histogramData;
  }

  const labels = binCounts.map(item => `${item.Bin.left.toFixed(2)}-${item.Bin.right.toFixed(2)}`);
  const dataValues = binCounts.map(item => item.Count);

  const histogramChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Frequency',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="chart">
        <h4>Product Distribution [Thousands of barrels]</h4>
        <Bar
          data={histogramChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `Category: ${context.label}, Frequency: ${context.raw}`;
                  },
                },
              },
            },
            scales: {
              x: {
                type: 'category',
                title: {
                  display: true,
                  text: 'Product', // Cambiar aquí el nombre del eje X
                },
                ticks: {
                  autoSkip: false,
                  maxRotation: 45,
                  minRotation: 45,
                  callback: function(value) {
                    return value.length > 10 ? value.slice(0, 10) + '...' : value; // Ajustar si es necesario
                  }
                },
                grid: {
                  display: false,
                },
              },
              y: {
                type: 'linear',
                title: {
                  display: true,
                  text: 'Frequency', // Cambiar aquí el nombre del eje Y
                },
                beginAtZero: true,
              },
            },
            layout: {
              padding: {
                bottom: 60, // Ajustar margen inferior si es necesario
              },
            },
          }}
        />
      </div>

      <div className="chart">
        <BoxplotChart data={boxplotData} />
      </div>
    </div>
  );
};

export default DataVisualization;