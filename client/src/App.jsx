import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EditBug from "./components/bugs/EditBug";
import AddBug from "./components/bugs/AddBug";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-bug" element={<AddBug />} />
          <Route path="/bugs/:id" element={<EditBug />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
