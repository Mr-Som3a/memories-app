import * as Yup from "yup";

export const postSchema = Yup.object({
  title: Yup.string().min(2).required(),
  message: Yup.string().min(3).max(500).required(),
  creator: Yup.string().min(2).max(50).required(),
  tags: Yup.array(),
  selectedFile:Yup.mixed().test(
          'fileType',
          'Only JPG/PNG images allowed',
          value => value && ['image/jpeg', 'image/png'].includes(value.type)
        )
        .test(
          'fileSize',
          'File too large (max 2MB)',
          value => value && value.size <= 2 * 1024 * 1024
        )
});


const validatePost = (post) => {
  const { error } = postSchema.validate(post);
  if (error) {
    return console.log(error, "not accepted inside vali");
  }
  console.log('vaildation success')
  return true;
};

export default validatePost;
