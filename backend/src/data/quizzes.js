const quizzes = [
  {
    title: "Hiragana Quiz",
    description:
      "Test your Hiragana knowledge.",
    level: "N5",

    questions: [
      {
        question:
          "What is the romaji of あ ?",
        options: [
          "a",
          "i",
          "u",
          "e",
        ],
        correctAnswer: "a",
      },

      {
        question:
          "What is the romaji of い ?",
        options: [
          "a",
          "i",
          "u",
          "e",
        ],
        correctAnswer: "i",
      },
    ],
  },

  {
    title: "Vocabulary Quiz",
    description:
      "Test your Japanese vocabulary.",

    level: "N5",

    questions: [
      {
        question:
          "What does 猫 mean?",
        options: [
          "Dog",
          "Cat",
          "Bird",
          "Fish",
        ],
        correctAnswer: "Cat",
      },

      {
        question:
          "What does 水 mean?",
        options: [
          "Fire",
          "Earth",
          "Water",
          "Wind",
        ],
        correctAnswer: "Water",
      },
    ],
  },
];

export default quizzes;