import { Star } from "@phosphor-icons/react";
import { useState } from "react";

function StarButton() {
  const [starred, setStarred] = useState(false);
  return (
    <button
      className={`${
        starred
          ? `animate-[spin_1s_ease-in-out_1]`
          : "animate-[bounce_1s_ease-in-out_infinite]"
      } transition-all`}
      aria-label="favorite"
    >
      <Star
        size={30}
        weight={starred ? "fill" : "regular"}
        color="#e8f901"
        onClick={() => {
          setStarred(true);
        }}
      />
    </button>
  );
}

export default StarButton;
