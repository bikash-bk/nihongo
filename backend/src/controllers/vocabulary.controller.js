import Vocabulary from "../models/Vocabulary.js";


// CREATE VOCABULARY
export const createVocabulary = async (
  req,
  res
) => {
  try {
    const {
      japaneseWord,
      romaji,
      meaning,
      exampleSentence,
      exampleMeaning,
      audioUrl,
      jlptLevel,
      lesson,
    } = req.body;

    const vocabulary = await Vocabulary.create({
      japaneseWord,
      romaji,
      meaning,
      exampleSentence,
      exampleMeaning,
      audioUrl,
      jlptLevel,
      lesson,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Vocabulary created successfully",
      vocabulary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL VOCABULARY
export const getVocabulary = async (
  req,
  res
) => {
  try {
    const vocabulary = await Vocabulary.find()
      .populate("lesson", "title");

    res.status(200).json({
      success: true,
      vocabulary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE VOCABULARY
export const getVocabularyById = async (
  req,
  res
) => {
  try {
    const vocabulary = await Vocabulary.findById(
      req.params.id
    );

    if (!vocabulary) {
      return res.status(404).json({
        success: false,
        message: "Vocabulary not found",
      });
    }

    res.status(200).json({
      success: true,
      vocabulary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// SEARCH VOCABULARY
export const searchVocabulary = async (
  req,
  res
) => {
  try {
    const keyword = req.query.keyword;

    const vocabulary = await Vocabulary.find({
      japaneseWord: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      vocabulary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};