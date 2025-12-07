'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ManagerDashboard() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/Manager')
      .then(res => res.json())
      .then(data => setOrders(data.orders || []))
      .catch(err => console.error('Failed to fetch orders:', err));
  }, []);

  return (
    <Box sx={{ px: 2, py: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Manager Dashboard
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Total (€)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map(order => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order.customerEmail}</TableCell>
                <TableCell>
                  {order.items.map(item => item.name + ' x' + item.quantity).join(', ')}
                </TableCell>
                <TableCell>{order.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
