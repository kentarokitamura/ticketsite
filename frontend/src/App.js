import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import React from "react";
import EventListPage from "./pages/EventListPage";
import EventPage from "./pages/EventPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" bg-gray-100 ">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" exact element={<EventListPage />} />
          <Route path="event/:id" element={<EventPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
