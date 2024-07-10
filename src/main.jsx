import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing the pages for routing
import App from './App.jsx';
import './index.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'aboutme',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);