import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
