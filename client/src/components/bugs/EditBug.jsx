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
  const [bug, setBug] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    category: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const getBug = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        const fetchedBug = response.data;
        setBug({
          title: fetchedBug.title,
          description: fetchedBug.description,
          priority: fetchedBug.priority,
          status: fetchedBug.status,
          category: fetchedBug.category,
        });
      } catch (err) {
        console.error(err.message);
      }
    };
    getBug();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBug((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`${API_URL}/${id}`, bug);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Bug</h2>

      <div>
        <label className="block text-gray-700 font-semibold mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={bug.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={bug.description}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Priority
        </label>
        <select
          name="priority"
          value={bug.priority}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="level1">Low</option>
          <option value="level2">Medium</option>
          <option value="level3">High</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-1">Status</label>
        <select
          name="status"
          value={bug.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Category
        </label>
        <input
          type="text"
          name="category"
          value={bug.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditBug;
