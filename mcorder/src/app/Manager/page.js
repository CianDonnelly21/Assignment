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
  // Dummy orders data
  var [orders, setOrders] = React.useState([
    {
      _id: '1',
      customerEmail: 'john@example.com',
      items: [
        { name: 'Big Mac', quantity: 2 },
        { name: 'Fries', quantity: 1 }
      ],
      total: 12.50,
      date: '2025-12-06T12:34:00Z'
    },
    {
      _id: '2',
      customerEmail: 'jane@example.com',
      items: [
        { name: 'McNuggets', quantity: 1 },
        { name: 'Coke', quantity: 2 }
      ],
      total: 8.75,
      date: '2025-12-06T13:10:00Z'
    }
  ]);

  return (
    <Box sx={{ px: 2, py: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Manager Dashboard
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Email</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Total (€)</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map(function(order) {
              return (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>{order.customerEmail}</TableCell>
                  <TableCell>
                    {order.items.map(function(item) {
                      return item.name + ' x' + item.quantity + ', ';
                    })}
                  </TableCell>
                  <TableCell>{order.total.toFixed(2)}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
