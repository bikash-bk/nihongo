import User from "../models/user.model.js";

export const updateStreak = async (
  userId
) => {
  try {

    const user =
      await User.findById(
        userId
      );

    if (!user) return;

    const today =
      new Date();

    const lastLogin =
      new Date(
        user.lastLogin
      );

    // DIFFERENCE IN DAYS
    const difference =
      Math.floor(
        (
          today - lastLogin
        ) /
          (1000 *
            60 *
            60 *
            24)
      );

    // CONTINUE STREAK
    if (difference === 1) {
      user.streak += 1;
    }

    // RESET STREAK
    if (difference > 1) {
      user.streak = 1;
    }

    // FIRST LOGIN
    if (!user.streak) {
      user.streak = 1;
    }

    user.lastLogin = today;

    await user.save();

  } catch (error) {
    console.log(error);
  }
};