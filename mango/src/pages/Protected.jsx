import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = () => {
  const { user } = useSelector((state) => state.auth);
  return <Outlet />;
};

export default Protected;
