import { useState, useEffect } from "react";
import axios from "axios";
import AddBug from "../components/bugs/AddBug";
import ViewBug from "../components/bugs/ViewBug";

const API_URL = "http://localhost:5000/api/bugs";

const Home = () => {
  return (
    <>
      <AddBug />
      <ViewBug />
    </>
  );
};

export default Home;
