// models/Trainee.js
import mongoose from "mongoose";

const TraineeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    age: { type: Number },
    membershipPlan: { type: String, enum: ["basic", "premium", "vip"], default: "basic" },
  },
  { timestamps: true }
);

export default mongoose.models.Trainee || mongoose.model("Trainee", TraineeSchema);
