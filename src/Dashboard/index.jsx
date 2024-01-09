import React from 'react';
import { Container, Box, Paper, Typography, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardCards from './metrics';

// Updated data to match the dashboard in the image
const dataByLocation = [
  { name: 'Edmonds', revenue: 10000 },
  { name: 'Mukilteo', revenue: 20000 },
  { name: 'Bothell', revenue: 30000 },
  { name: 'Lynnwood', revenue: 40000 },
  { name: 'Seattle', revenue: 50000 },
  { name: 'Everett', revenue: 60000 },
];

const dataByJobType = [
  { name: 'Material Sale', revenue: 7000 },
  { name: 'Maintenance', revenue: 14000 },
  { name: 'HWT Replacement', revenue: 21000 },
  { name: 'Bid Work Plumbing', revenue: 28000 },
  { name: 'Service HVAC', revenue: 35000 },
  { name: 'Bid Work HVAC', revenue: 42000 },
  { name: 'Service Plumbing', revenue: 49000 },
];

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Company Metrics */}
        <DashboardCards />
        {/* More metrics boxes can be added here */}
      </Grid>

      {/* Revenue by Job Location Chart */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" gutterBottom component="div">
          Revenue by Job Location
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={dataByLocation}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={80} />
            <Tooltip />
            <Bar dataKey="revenue" fill="#82ca9d" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Revenue by Job Type Chart */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" gutterBottom component="div">
          Revenue by Job Type
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={dataByJobType}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={120} />
            <Tooltip />
            <Bar dataKey="revenue" fill="#8884d8" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
}

export default Dashboard;
