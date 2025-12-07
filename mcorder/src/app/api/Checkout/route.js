const handleCheckout = (paymentType) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      customerEmail: "customer@example.com",
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      paymentType,      // <-- cash or card
      date: new Date().toISOString(),
    })
  });
  localStorage.removeItem('cart');
};
