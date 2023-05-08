import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./home/pages/Home";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import SideDrawer from "./shared/components/SideDrawer/SideDrawer";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <SideDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory/following" element />
          <Route path="/directory" element />
          <Route path="/settings/profile" element />
          <Route path="*" element={<Navigate to />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
