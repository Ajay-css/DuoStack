import { useState, useEffect } from "react";
import axios from "../services/api";
import toast from "react-hot-toast";

export default function AddProject() {

  const [form, setForm] = useState({
    title: "",
    desc: "",
    tech: "",
    link: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [projects, setProjects] = useState([]);

  const token = localStorage.getItem("adminToken");

  const fetchProjects = async () => {
    const res = await axios.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("desc", form.desc);
      formData.append("tech", form.tech);
      formData.append("link", form.link);
      formData.append("img", image);

      await axios.post("/projects", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      setForm({
        title: "",
        desc: "",
        tech: "",
        link: ""
      });

      setImage(null);
      setPreview(null);

      fetchProjects();

    } catch (err) {
      console.log(err);
      alert("Failed to add project");
    }
  };

  return (

    <div className="p-10 bg-white min-h-screen">

      <h1 className="text-3xl font-bold mb-10">
        Projects Manager
      </h1>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="p-3 bg-gray-100 rounded-lg outline-none"
          required
        />

        <input
          type="text"
          name="tech"
          placeholder="Technologies (React, Node)"
          value={form.tech}
          onChange={handleChange}
          className="p-3 bg-gray-100 rounded-lg outline-none"
          required
        />

        <textarea
          name="desc"
          placeholder="Project Description"
          value={form.desc}
          onChange={handleChange}
          className="p-3 bg-gray-100 rounded-lg outline-none md:col-span-2"
          rows="3"
          required
        />

        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={form.link}
          onChange={handleChange}
          className="p-3 bg-gray-100 rounded-lg outline-none"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="p-3 bg-gray-100 rounded-lg"
          required
        />

        {preview && (
          <img
            src={preview}
            className="w-40 h-24 object-cover rounded-lg"
          />
        )}

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 w-fit"
        >
          Add Project
        </button>

      </form>


      {/* PROJECT TABLE

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="text-gray-500 text-sm border-b">

              <th className="py-3">Image</th>
              <th>Title</th>
              <th>Tech</th>
              <th>Link</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {projects.map((p) => (

              <tr
                key={p._id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="py-3">
                  <img
                    src={`${import.meta.env.VITE_API_URL}${p.img}`}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>

                <td>{p.title}</td>

                <td className="text-sm text-gray-500">
                  {p.tech.join(", ")}
                </td>

                <td>
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-blue-500"
                  >
                    Visit
                  </a>
                </td>

                <td className="flex gap-3">

                  <button className="text-red-500">
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div> */}

    </div>

  );
}