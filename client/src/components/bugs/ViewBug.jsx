import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

const API_URL = "http://localhost:5000/api/bugs";

const ViewBug = () => {
  const [bugs, setBugs] = useState([]);
  const [switch0, setSwitch0] = useState(false);

  useEffect(() => {
    const getBugs = async () => {
      try {
        const response = await axios.get(API_URL);
        setBugs([...bugs, ...response.data]);
      } catch (err) {
        console.error(err.message);
      }
    };
    getBugs();
  }, [switch0]);

  const deleteBug = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, id);
      setBugs([]);
      setSwitch0((prev) => !prev);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Reported Bugs
        </h2>

        <div className="grid gap-6">
          {bugs.length === 0 ? (
            <p className="text-center text-gray-500">No bugs found.</p>
          ) : (
            bugs.map((bug, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {bug.title}
                  </h3>

                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      bug.priority === "level1"
                        ? "bg-green-100 text-green-700"
                        : bug.priority === "level2"
                        ? "bg-yellow-100 text-yellow-700"
                        : bug.priority === "level3"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {bug.priority}
                  </span>
                </div>

                <p className="text-gray-600 mb-2">{bug.description}</p>

                <div className="flex justify-between text-sm text-gray-500">
                  <p>
                    <span className="font-semibold text-gray-700">Status:</span>{" "}
                    {bug.status}
                  </p>
                  {bug.category && (
                    <p>
                      <span className="font-semibold text-gray-700">
                        Category:
                      </span>{" "}
                      {bug.category}
                    </p>
                  )}
                </div>
                <div className="flex justify-end gap-3">
                  <Link
                    to={`/bugs/${bug.id}`}
                    className="px-4 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBug(bug.id)}
                    className="px-4 py-1.5 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ViewBug;
