import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/login";
import RegisterPage from "./pages/Auth/register";
import Home from "./pages/Home";
import MenuPage from "./pages/Menu";
import DetailMenuPage from "./pages/Menu/detail";
import PaymentPage from "./pages/Menu/payment";
import ProfilePage from "./pages/Profile";
import OrdersPage from "./pages/Profile/orders";
import ResultPage from "./pages/Profile/Review/result";
import ReviewPage from "./pages/Profile/Review/review";
import EditPage from "./pages/Profile/Review/edit";
import PrinciplePage from "./pages/Principle";
import HomeCompanyPage from "./pages/Craftman/Home";
import DetailProduct from "./pages/Craftman/Product/detail";
import AuthMiddleware from "./utils/AuthMiddleware";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <AuthMiddleware>
              <Home />
            </AuthMiddleware>
          }
        />
        <Route
          path="/menu"
          element={
            <AuthMiddleware>
              <MenuPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/menu-detail"
          element={
            <AuthMiddleware>
              <DetailMenuPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/menu-detail/payment"
          element={
            <AuthMiddleware>
              <PaymentPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthMiddleware>
              <ProfilePage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/orders"
          element={
            <AuthMiddleware>
              <OrdersPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/orders/review"
          element={
            <AuthMiddleware>
              <ReviewPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/orders/review/result"
          element={
            <AuthMiddleware>
              <ResultPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/orders/review/edit"
          element={
            <AuthMiddleware>
              <EditPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/principle"
          element={
            <AuthMiddleware>
              <PrinciplePage />
            </AuthMiddleware>
          }
        />

        {/* Craftman Routes */}
        <Route
          path="/home/craftman"
          element={
            <AuthMiddleware>
              <HomeCompanyPage />
            </AuthMiddleware>
          }
        />
        <Route
          path="/home/craftman/product-detail"
          element={
            <AuthMiddleware>
              <DetailProduct />
            </AuthMiddleware>
          }
        />
      </Routes>
    </Router>
  );
}
