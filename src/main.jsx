import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';

import './index.css';

import App from './App.jsx';
import { Cart, Error, Home, Order, ProductDetails } from './pages';

import { loader as homeLoader } from './pages/Home.jsx';
import { loader as productDetailsLoader } from './pages/ProductDetails.jsx';
import { action as cartAction } from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: '/cart', element: <Cart />, action: cartAction },
      { path: '/order', element: <Order /> },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
