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
import Checkout from "./component/pages/Checkout";
import Order from './component/pages/OrderHistory';
import ParentalInsightsDetail from "./component/pages/ParentalInsightsDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import NotFound from "./component/pages/NotFound";
import Layout from './component/Layout';
import { ThemeProvider } from './context/ThemeContext';
import PrivacyPolicy from "./component/pages/PrivacyPolicy";
import TermsAndConditions from "./component/pages/TermsAndConditions";
import RefundAndCancellationPolicy from "./component/pages/RefundAndCancellationPolicy";

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
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/order",
      element: <Order />,
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
      path:"/parental-insights/:id",
      element: <ParentalInsightsDetail/>,
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
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/terms-and-conditions",
      element: <TermsAndConditions />,
    },
    {
      path: "/refund-and-cancellation-policy",
      element: <RefundAndCancellationPolicy />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
