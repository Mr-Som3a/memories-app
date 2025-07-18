import * as Yup from "yup";

export const postSchema = Yup.object({
  title: Yup.string().min(2),
  message: Yup.string().min(3).max(500).required(),
  creator: Yup.string().min(2).max(50).required(),
  tags: Yup.array(),
  selectedFile:Yup.mixed()
});


const validatePost = (post) => {
  const { error } = postSchema.validate(post);
  if (error) {
    return console.log(error, "not accepted inside vali");
  }

  return true;
};

export default validatePost;
