import Joi from "joi";

const postSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  message: Joi.string().min(10).max(500).required(),
  creator: Joi.string().min(3).max(50).required(),
  tags: Joi.array().items(Joi.string().min(1)),
  createdAt: Joi.date(),
});

const validationPost = (req, res, next) => {
 
  const { error } = postSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

// const validatePost = (post) => {
//   const { error } = postSchema.validate(post);
//   if (error) {
//     console.log('find the error')
//     throw new Error(error.details[0].message);
//   }
//   return true;
// };

export default validationPost;
