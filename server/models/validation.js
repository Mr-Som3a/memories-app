import Joi from 'joi';

const postSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
    message: Joi.string().min(10).max(500).required(),
    creator: Joi.string().min(3).max(50).required(),
    tags: Joi.array().items(Joi.string().min(1)),
    selectedFile: Joi.string(),
})


const validatePost = (post) => {
  const { error } = postSchema.validate(post);
  if (error) {
    throw new Error(error.details[0].message);
  }
    return true;
}

export default validatePost;