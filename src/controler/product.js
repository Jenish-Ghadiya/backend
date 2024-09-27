import Joi from "joi";

export default {
    validator: {
    query: Joi.object({
      page: Joi.number().default(1),
      limit: Joi.number().default(10),
    }),
    params: Joi.object({
      userId: Joi.string().required(),
    }),
  },
  handler: async (req, res) => {
    try {
      console.log("params", req.params);
      console.log("query", req.query);
      res.status(200).json({ message: "Product fetched successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
