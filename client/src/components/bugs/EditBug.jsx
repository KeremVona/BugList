import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/*
1. Get the chosen bug
2. Put the details in inputs
3. Allow editing
4. Send the update
*/

const EditBug = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    category: "",
  });

  const { id } = useParams();

  return <div>EditBug</div>;
};

export default EditBug;
