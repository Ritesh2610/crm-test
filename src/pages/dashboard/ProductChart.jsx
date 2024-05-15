import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarController, BarElement, Tooltip } from 'chart.js';

Chart.register(LinearScale, CategoryScale, BarController, BarElement, Tooltip);

const ProductChart = ({ products }) => {
  // Extracting unique categories
  const categories = [...new Set(products.map(product => product.category))];

  // Counting stock for each category
  const stockByCategory = categories.map(category => {
    const categoryProducts = products.filter(product => product.category === category);
    const totalStock = categoryProducts.reduce((acc, product) => acc + product.stock, 0);
    return totalStock;
  });

  // Data for the chart
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Stock',
        data: stockByCategory,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          // Add more colors if needed
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          // Add more colors if needed
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Stock',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Category',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div 
    // style={{ height: 'auto', maxHeight: '600px' }}
    >
      <p className='mb-3 text-center'>Stock of Products in Each Category</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProductChart;
