import { createBrowserRouter, RouterProvider, Router, Outlet } from 'react-router-dom';
import AppPortfolio from './portfolio/App-Portfolio';
import Home from './pages/Home';
import Register from './pages/Register'
import Login from './pages/Login'
import Single from './pages/Single'
import Write from './pages/Write'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './style.scss'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/portfolio",
    element: <AppPortfolio />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
]);


function App() {
  return (
    <div className='app'>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
