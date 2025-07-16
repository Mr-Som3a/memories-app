const Post = ({ post, onDelete }) => {
  return (
    <div>
      <div className="card  w-[15rem] shadow-sm ">
        <figure className="">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-t-xl"
          />
        </figure>
        <div className="card-body px-4 shadow-2xl ">
          <h2 className="card-title">{post.title}</h2>
          <div>
            {post.tags.length > 0
              ? "# " + post.tags.map((tag) => <span>{tag}</span>)
              : "#no"}
          </div>
          <p>{post.message}</p>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2">
              <img src="src/assets/unlike.svg" alt="arrow" />
              <span className="font-semibold">Like</span>
            </button>
            <div className="card-actions ">
              <button className=" cursor-pointer">
                <img src="src/assets/3dots.svg" alt="edit" />
              </button>
              <button
                className="cursor-pointer"
                onClick={() => onDelete(post._id)}
              >
                <img src="src/assets/trash.svg" alt="remove" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
