import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/*
1. Get the chosen bug
2. Put the details in inputs
3. Allow editing
4. Send the update
*/

const API_URL = "http://localhost:5000/api/bugs";

const EditBug = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    category: "",
  });

  const { id } = useParams();

  const getBug = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <button onClick={getBug} className="bg-gray-400">
      EditBug
    </button>
  );
};

export default EditBug;
