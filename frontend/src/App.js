import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import React from "react";
import EventListPage from "./pages/EventListPage";
import EventPage from "./pages/EventPage";
import CreateEventPage from "./pages/CreateEventPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import SignupPage from "./pages/SignupPage";

function App() {
    return (
        <div className=" bg-gray-100 ">
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <EventListPage />
                                </PrivateRoute>
                            }
                        />
                        <Route path="event/:id" element={<EventPage />} />
                        <Route path="event/new" element={<CreateEventPage />} />
                        <Route path="signup" element={<SignupPage />} />
                        <Route path="login" element={<LoginPage />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
