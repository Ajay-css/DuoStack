import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

export const addProject = async (req, res) => {
  try {

    const { title, desc, tech, link } = req.body;

    const newProject = new Project({
      title,
      desc,
      tech: tech ? tech.split(",") : [],
      link,
      img: req.file ? `/uploads/${req.file.filename}` : ""
    });

    await newProject.save();

    res.status(201).json(newProject);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProject = async (req, res) => {
  try {

    const data = {
      ...req.body
    };

    if (req.file) {
      data.img = `/uploads/${req.file.filename}`;
    }

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    res.json(updated);

  } catch(err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}