import { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ margin: "5px 0px" }}>Like Button</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div onClick={() => setLiked(!liked)}>
          {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </div>
        <span>
          {liked ? "Thank you !" : "Click like if this post is useful to you !"}
        </span>
      </div>
    </div>
  );
}
