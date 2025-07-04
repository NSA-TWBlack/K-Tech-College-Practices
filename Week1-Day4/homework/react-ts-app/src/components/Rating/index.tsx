import React from "react";

type Props = {
  stars?: number;
};

const ratingLabels: { [key: number]: string } = {
  1: "Realy Bad",
  2: "Bad",
  3: "Normal",
  4: "Amazing",
  5: "Excellently!",
};

export default function Rating({ stars = 0 }: Props) {
  const [rating, setRating] = React.useState(stars);

  const handleClick = (index: number) => {
    setRating(index);
  };

  return (
    <div>
      <h2 style={{ margin: "10px 0 0 0" }}>Rating</h2>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <span
            key={index}
            style={{
              cursor: "pointer",
              color: rating >= item ? "orange" : "gray",
            }}
            onClick={() => handleClick(item)}
          >
            ★
          </span>
        );
      })}
      {rating > 0 && (
        <span style={{ marginLeft: "12px", fontSize: "12px" }}>
          {ratingLabels[rating]}
        </span>
      )}
    </div>
  );
}
