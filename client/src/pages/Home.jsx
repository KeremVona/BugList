import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="submit">
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <input
          type="text"
          value={formData.description}
          onChange={(e) => handleChange(e)}
          name="description"
        />
        <input
          type="text"
          value={formData.priority}
          onChange={(e) => handleChange(e)}
          name="priority"
        />
        <input
          type="text"
          value={formData.status}
          onChange={(e) => handleChange(e)}
          name="status"
        />
        <input
          type="text"
          value={formData.category}
          onChange={(e) => handleChange(e)}
          name="category"
        />
        <button type="submit">Open</button>
      </form>
    </div>
  );
};

export default Home;
