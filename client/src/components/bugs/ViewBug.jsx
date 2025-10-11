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
      <div className="bg-[#1c2541] min-h-screen pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Reported Bugs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bugs.length === 0 ? (
              <p className="col-span-full text-center text-gray-400">
                No bugs found.
              </p>
            ) : (
              bugs.map((bug, i) => (
                <div
                  key={i}
                  className="bg-[#3a506b] rounded-xl shadow-lg p-5 border border-gray-700 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {bug.title}
                      </h3>

                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          bug.priority === "level1"
                            ? "bg-[#6fffe9] text-[#1c2541]"
                            : bug.priority === "level2"
                            ? "bg-[#5bc0be] text-[#1c2541]"
                            : bug.priority === "level3"
                            ? "bg-orange-400 text-[#1c2541]"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {bug.priority}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {bug.description}
                    </p>

                    <div className="space-y-1 mb-4 text-sm text-gray-400">
                      <p>
                        <span className="font-semibold text-white">
                          Status:
                        </span>{" "}
                        {bug.status}
                      </p>
                      {bug.category && (
                        <p>
                          <span className="font-semibold text-white">
                            Category:
                          </span>{" "}
                          {bug.category}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto flex justify-end gap-3 pt-3 border-t border-gray-600">
                    <Link
                      to={`/bugs/${bug.id}`}
                      className="px-4 py-1.5 text-sm font-medium bg-[#5bc0be] text-[#1c2541] rounded-lg hover:bg-opacity-80 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBug(bug.id)}
                      className="px-4 py-1.5 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBug;
