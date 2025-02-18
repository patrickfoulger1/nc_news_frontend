function Comment({ comment }) {
  console.log(comment);
  return (
    <>
      <div className="flex border-t-1 border-white">
        <br />
        <p className="w-2/4">
          <span>{comment.author}</span>
        </p>

        <p className="w-3/4 "> {comment.body}</p>
      </div>
      <br />
    </>
  );
}

export default Comment;
