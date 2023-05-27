import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    {/* <Home /> */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reservation',
    element: <h2>Detail jízdenky</h2>,
  },
]);
