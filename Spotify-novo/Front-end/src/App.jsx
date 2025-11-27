import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/Pages/Home";
import Artists from "./assets/Pages/Artists";
import Artist from "./assets/Pages/Artist";
import Songs from "./assets/Pages/Songs";
import Song from "./assets/Pages/Song";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
