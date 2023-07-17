import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Contact,
  Home,
  LogIn,
  SignUp,
  SingleCourse,
  Results,
} from "./pages";
import E404 from './components/errors/E404'
const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/singlecourse" element={<SingleCourse />} />
      <Route path="/results/" element={<Results />} />
      <Route path="/*" element={<E404 />} />
    </Routes>
  );
};

export default ConfigRoutes;
