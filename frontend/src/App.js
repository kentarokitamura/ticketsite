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
import UserPage from "./pages/UserPage";
import EventEditPage from "./pages/EventEditPage";

function App() {
    return (
        <div className=" bg-gray-100 ">
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<EventListPage />} />
                        <Route path="event/:id" element={<EventPage />} />
                        <Route
                            path="event/new"
                            element={
                                <PrivateRoute>
                                    <CreateEventPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="user"
                            element={
                                <PrivateRoute>
                                    <UserPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="user/edit/:id"
                            element={
                                <PrivateRoute>
                                    <EventEditPage />
                                </PrivateRoute>
                            }
                        />

                        <Route path="signup" element={<SignupPage />} />
                        <Route path="login" element={<LoginPage />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
