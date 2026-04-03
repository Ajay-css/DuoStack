import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Optional: check if decoded email matches ENV admin
    if(decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.admin = decoded;
    next();
  } catch(err) {
    res.status(401).json({ message: "Invalid token" });
  }
};