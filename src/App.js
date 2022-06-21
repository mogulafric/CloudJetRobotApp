import Login from "./screens/Login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";
import TrainingData from "./screens/TrainingData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trainingData" element={<TrainingData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
