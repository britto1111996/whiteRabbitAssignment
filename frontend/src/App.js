import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import RegisterScreen from "./Component/RegisterScreen";
import Header from "./Component/Header";
import ListNames from "./Component/ListNames";
import Profile from "./Component/Profile";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/userList" element={<ListNames />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
