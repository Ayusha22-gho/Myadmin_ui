import logo from './logo.svg';
import './Styles/App.css';
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import UserPage from "./pages/Users/UserPage"
import NavBar from "./components/Navbar/Navbar"
import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"
 import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {
 
  const Layout = ()=>{
    return (
      <div className='main'>
        <NavBar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
          <Outlet/>
          </div>
        </div>
        
        <Footer/>
      </div>
    )
  }

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
         path: "/",
    element:  <Home />
      },
      {
         path: "users",
      element: <UserPage />
      },
      {
        path: "products",
    element: <Products />
      }
    ]
  }
 
 
]);

return (
  <RouterProvider router={router} />
);
}

export default App;
