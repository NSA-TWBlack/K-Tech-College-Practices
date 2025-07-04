import React from "react";
import { IoStar } from "react-icons/io5";

function RatingStar() {
  const [stars, setStars] = React.useState(0);
  const [msg, setMsg] = React.useState("");

  //let TotalStar = [1, 2, 3, 4, 5];
  let TotalStar_arr = [
    { id: 1, msg: "Rất kém" },
    { id: 2, msg: "Kém" },
    { id: 3, msg: "Bình thường" },
    { id: 4, msg: "Tốt" },
    { id: 5, msg: "Rất tốt" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        width: "30%",
      }}
    >
      <h5 style={{ fontWeight: "500" }}>Chọn đánh giá của bạn: </h5>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {TotalStar_arr.map((item, index) => {
          if (index <= stars) {
            return (
              <IoStar
                key={item.id.toString()}
                style={{ color: "#f60", cursor: "pointer" }}
                onClick={() => {
                  setStars(index);
                  setMsg(item.msg);
                }}
              />
            );
          }
          return (
            <IoStar
              key={item.id.toString()}
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                setStars(index);
                setMsg(item.msg);
              }}
            />
          );
        })}
        <span
          style={{
            display: "inline-block",
            marginLeft: "10px",
            background: "#75da66",
            fontStyle: "italic",
            color: "#fff",
            padding: "5px 10px",
            fontSize: "10px",
            borderRadius: "5px",
          }}
        >
          {msg}
        </span>
      </div>
    </div>
  );
}

export default RatingStar;
