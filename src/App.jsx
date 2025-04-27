import "./App.css";
import Home from "./component/pages/Home";
import Catalogue from "./component/pages/Catalogue";
import Pricing from "./component/pages/Pricing";
import ParentalInsights from "./component/pages/ParentalInsights";
import Seller from "./component/pages/Seller";
import About from "./component/pages/About";
import ToyCardComponent from "./component/ToyCardComponent";
import ToyDetailPage from "./component/pages/ToyDetailPage";
import Wishlist from "./component/pages/Wishlist";
import Cart from "./component/pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/catalogue",
      element: <Catalogue />,
    },
    {
      path: "/toy",
      element: <ToyCardComponent />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/parental-insights",
      element: <ParentalInsights />,
    },
    {
      path: "/seller",
      element: <Seller />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/toy/:id",
      element: <ToyDetailPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
