const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function generateMissingItemImage(req, res, next) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    console.error("💥ERROR: ", "OpenAI API key not configured");
    return;
  }

  if (req.body.item && !req.body.item.image) {
    try {
      const response = await openai.createImage({
        prompt: req.body.item.title,
        n: 1,
        size: "256x256",
      });
      req.body.item.image = response.data.data[0].url;
    } catch (err) {
      next(err);
    }
  }
  next();
};
