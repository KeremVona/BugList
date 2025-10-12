import { useState } from "react";
import axios from "axios";
import Navbar from "../ui/Navbar";

const API_URL = "http://localhost:5000/api/bugs";

const AddBug = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "level1",
    status: "Open",
    category: "",
  });

  const [bugs, setBugs] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBugs([...bugs, formData]);

    try {
      const response = await axios.post(API_URL, formData);
    } catch (err) {
      console.error(err.message);
    }

    setFormData({
      title: "",
      description: "",
      priority: "level1",
      status: "Open",
      category: "",
    });
  };
  return (
    <>
      <Navbar isAdd={true} />
      <form
        action="submit"
        className="max-w-md mx-auto mt-10 bg-[#3a506b] shadow-xl rounded-xl p-6 space-y-4 border border-gray-700"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-white">
          Add Bug
        </h2>

        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#1c2541] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5bc0be]"
        />

        <div>
          <label className="block text-white font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Description"
            className="w-full border border-gray-600 rounded px-3 py-2 bg-[#1c2541] text-white focus:outline-none focus:ring-2 focus:ring-[#5bc0be]"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">
            Priority
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded px-3 py-2 bg-[#1c2541] text-white focus:outline-none focus:ring-2 focus:ring-[#5bc0be]"
          >
            <option value="level1">Low</option>
            <option value="level2">Medium</option>
            <option value="level3">High</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded px-3 py-2 bg-[#1c2541] text-white focus:outline-none focus:ring-2 focus:ring-[#5bc0be]"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <input
          type="text"
          value={formData.category}
          onChange={(e) => handleChange(e)}
          name="category"
          placeholder="Category"
          className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-[#1c2541] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5bc0be]"
        />
        <button
          type="submit"
          className="w-full bg-[#5bc0be] text-[#1c2541] font-semibold py-2 rounded-lg hover:bg-[#6fffe9] transition duration-200"
        >
          Open
        </button>
      </form>
    </>
  );
};

export default AddBug;
