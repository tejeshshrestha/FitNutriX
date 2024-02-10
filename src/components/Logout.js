import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.localStorage.removeItem("token");
    nav("/login");
  });
};

export default Logout;
