import express from "express";
import { getProjects, addProject, updateProject, deleteProject } from "../controllers/projectController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/", getProjects);

router.post(
    "/",
    verifyAdmin,
    upload.single("img"),   // 👈 multer
    addProject
);

router.put(
    "/:id",
    verifyAdmin,
    upload.single("img"),
    updateProject
);

router.delete("/:id", verifyAdmin, deleteProject);

export default router;