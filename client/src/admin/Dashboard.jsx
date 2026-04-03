import { useEffect, useState } from "react";
import axios from "../services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("adminToken"); // JWT token

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch projects");
    }
  };

  const deleteProject = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter((p) => p._id !== id));
      toast.success("Project deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Tech Stack</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id} className="hover:bg-gray-50 transition">
              <td className="border p-2">{project.title}</td>
              <td className="border p-2">{project.tech.join(", ")}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() =>
                    (window.location.href = `/admin/edit/${project._id}`)
                  }
                  className="px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProject(project._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}