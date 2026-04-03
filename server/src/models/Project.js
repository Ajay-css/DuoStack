import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  tech: [{ type: String }],
  link: { type: String },
}, { timestamps: true });

export default mongoose.model("Project", ProjectSchema);