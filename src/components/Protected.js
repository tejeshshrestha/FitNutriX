import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const nav = useNavigate();
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (!token) {
      nav("/login");
    }
  }, []);
  return children;
};

export default Protected;
