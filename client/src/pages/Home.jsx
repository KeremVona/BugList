import { useState, useEffect } from "react";
import axios from "axios";
import AddBug from "../components/bugs/AddBug";
import ViewBug from "../components/bugs/ViewBug";
import Navbar from "../components/ui/Navbar";

const API_URL = "http://localhost:5000/api/bugs";

const Home = () => {
  return (
    <>
      <Navbar isAdd={false} />
      <ViewBug />
    </>
  );
};

export default Home;
