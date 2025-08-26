// models/Trainer.js
import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialization: { type: String },
    experience: { type: Number }, // years
  },
  { timestamps: true }
);

export default mongoose.models.Trainer || mongoose.model("Trainer", TrainerSchema);
