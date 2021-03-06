const APP_ROUTES = {
  homePageRoute: '/',
  searchPageRoute: '/search/:searchTerm',
  cartPageRoute: '/cart',
  ordersPageRoute: '/orders',
  checkout: {
    addressPageRoute: '/checkout/address',
    deliveryPageRoute: '/checkout/delivery',
    paymentPageRoute: '/checkout/payment',
    confirmPageRoute: '/checkout/confirm',
    completePageRoute: '/checkout/complete'
  }
};

export default APP_ROUTES;
