import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis domain={[0, 5]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="rating" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;