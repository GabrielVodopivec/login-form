import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './components/App';
import Listado from './components/Listado';
import Register from './components/Register';

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}, {
  path: '/listado',
  element: <Listado />
}, {
  path: '/register',
  element: <Register />
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)