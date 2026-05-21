import Progress from "../models/Progress.js";


// GET USER PROGRESS
export const getUserProgress = async (
  req,
  res
) => {
  try {
    let progress =
      await Progress.findOne({
        user: req.user._id,
      })
        .populate(
          "completedLessons"
        )
        .populate(
          "completedQuizzes"
        );

    if (!progress) {
      progress =
        await Progress.create({
          user: req.user._id,
        });
    }

    res.status(200).json({
      success: true,
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// COMPLETE LESSON
export const completeLesson =
  async (req, res) => {
    try {
      let progress =
        await Progress.findOne({
          user: req.user._id,
        });

      if (!progress) {
        progress =
          await Progress.create({
            user: req.user._id,
          });
      }

      if (
        !progress.completedLessons.includes(
          req.params.lessonId
        )
      ) {
        progress.completedLessons.push(
          req.params.lessonId
        );

        progress.xp += 50;

        if (progress.xp >= 500) {
          progress.level = 2;
        }

        if (progress.xp >= 1000) {
          progress.level = 3;
        }

        if (
          progress.completedLessons
            .length >= 5
        ) {
          if (
            !progress.achievements.includes(
              "Lesson Master"
            )
          ) {
            progress.achievements.push(
              "Lesson Master"
            );
          }
        }

        await progress.save();
      }

      res.status(200).json({
        success: true,
        message:
          "Lesson completed successfully",
        progress,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


// COMPLETE QUIZ
export const completeQuiz =
  async (req, res) => {
    try {
      let progress =
        await Progress.findOne({
          user: req.user._id,
        });

      if (!progress) {
        progress =
          await Progress.create({
            user: req.user._id,
          });
      }

      if (
        !progress.completedQuizzes.includes(
          req.params.quizId
        )
      ) {
        progress.completedQuizzes.push(
          req.params.quizId
        );

        progress.xp += 100;

        if (progress.xp >= 500) {
          progress.level = 2;
        }

        if (progress.xp >= 1000) {
          progress.level = 3;
        }

        if (
          progress.completedQuizzes
            .length >= 3
        ) {
          if (
            !progress.achievements.includes(
              "Quiz Champion"
            )
          ) {
            progress.achievements.push(
              "Quiz Champion"
            );
          }
        }

        await progress.save();
      }

      res.status(200).json({
        success: true,
        message:
          "Quiz completed successfully",
        progress,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


// LEADERBOARD
export const getLeaderboard =
  async (req, res) => {
    try {
      const leaderboard =
        await Progress.find()
          .populate(
            "user",
            "username"
          )
          .sort({ xp: -1 })
          .limit(10);

      res.status(200).json({
        success: true,
        leaderboard,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };