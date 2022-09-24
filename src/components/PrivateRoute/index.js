import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const isUser = localStorage.getItem("userAuth");
  console.log("isUser-----", isUser);

  return isUser ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;
