import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/login";
import RegisterPage from "./pages/Auth/register";
import Home from "./pages/Home";
import MenuPage from "./pages/Menu";
import DetailMenuPage from "./pages/Menu/detail";
import PaymentPage from "./pages/Menu/payment";
// import Home from "./pages/Home";


export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<MenuPage/>}/>
      <Route path="/menu-detail" element={<DetailMenuPage/>}/>
      <Route path="/menu-detail/payment" element={<PaymentPage/>}/>
    </Routes>
   </Router>
  )
}
