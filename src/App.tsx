// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";
import BuilderGrant from "./pages/BuilderGrant";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/ecosystem" element={<Ecosystem />} /> */}
            {/* <Route path="/dao" element={<DAO />} /> */}
            <Route path="/buildergrant" element={<BuilderGrant />} />
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
