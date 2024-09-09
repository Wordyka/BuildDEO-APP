import { useNavigate } from "react-router-dom";

export default function AuthMiddleware ({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  if (!token) {
    navigate("/");  // Redirect to login if no token
  }
  return children;  // Allow access if token exists
};
