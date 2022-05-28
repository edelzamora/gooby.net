import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SinglePet from "./pages/SinglePet";
import ViewPets from "./components/ViewPets";
import PetManager from "./pages/PetManager";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="petmanager" element={<PetManager />}/>
            <Route path="viewpets" element={<ViewPets />} />
            <Route path="viewpets/:pet" element={<SinglePet />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
