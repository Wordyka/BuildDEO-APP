import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/login";
import RegisterPage from "./pages/Auth/register";
import Home from "./pages/Home";
// import Home from "./pages/Home";


export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
   </Router>
  )
}
