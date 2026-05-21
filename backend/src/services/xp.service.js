import User from "../models/user.model.js";

export const addXP = async (
  userId,
  xp
) => {
  const user =
    await User.findById(userId);

  if (!user) return;

  user.xp += xp;

  await user.save();
};