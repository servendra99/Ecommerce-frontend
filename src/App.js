import "./App.css";
import Header from "./components/layout/Header/Header.js";
import Footer from "./components/layout/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Home from "./components/Home/Home.js";

export default function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", " Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
