import { Star } from "@phosphor-icons/react";
import { useState } from "react";
import { patchUpvote } from "../utils/ncnews-api";

function StarButton({
  article_id,
  setArticleVotes,
  articleVotes,
  originalVotes,
}) {
  const [starred, setStarred] = useState(false);
  const [voteError, setVoteError] = useState(false);

  return (
    <>
      <button
        aria-label="star upvote"
        className={`${
          starred
            ? `animate-[spin_1s_ease-in-out_1]`
            : "animate-[bounce_1s_ease-in-out_infinite]"
        } transition-all`}
      >
        <Star
          size={30}
          weight={starred ? "fill" : "regular"}
          color="#e8f901"
          onClick={() => {
            setVoteError(false);
            if (!starred) {
              setArticleVotes(articleVotes + 1);
              patchUpvote(1, article_id).catch(() => {
                setVoteError(true);
                setStarred(false);
                setArticleVotes(originalVotes);
              });
            }
            setStarred(true);
          }}
        />
      </button>
      {voteError ? (
        <span className="text-xs text-black italic">
          Sorry there was a problem liking this post
        </span>
      ) : null}
    </>
  );
}

export default StarButton;
