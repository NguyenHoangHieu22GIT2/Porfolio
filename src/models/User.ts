import { User } from "@/type/User";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userDocument = models.users || model("users", userSchema);

export default userDocument;
