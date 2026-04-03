import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Hash password before save
AdminSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Password check
AdminSchema.methods.comparePassword = async function(candidate){
  return await bcrypt.compare(candidate, this.password);
}

export default mongoose.model("Admin", AdminSchema);