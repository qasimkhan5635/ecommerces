import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/shop";

function ApplicationRoutes() {
  return (
        <Routes>
            <Route path="/" element={<Shop />} />
        </Routes>
  );
}

export default ApplicationRoutes;
