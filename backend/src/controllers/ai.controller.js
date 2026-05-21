import { askAI } from "../services/ai.service.js";

export const chatWithAI =
  async (req, res) => {
    try {
      const { message } =
        req.body;

      const response =
        await askAI(message);

      res.json({
        reply: response
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };