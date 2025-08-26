
import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
  {
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer", required: true },
    trainees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trainee" }],
    schedule: { type: Date, required: true },
    duration: { type: Number, required: true }, 
  },
  { timestamps: true }
);

export default mongoose.models.Class || mongoose.model("Class", ClassSchema);
