
import React from "react";
import Button from "./Button"

const Card = () => {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 0];

  const btnColor = {
    backgroundColor: "red",
    width: "1.875rem",
    height: "1.875rem",
    borderRadius:"50%",
    cursor:"pointer"
  };

  return (
    <div>
     {
      ratings.map((ratings) =>(
        <Button key= {ratings} styles={btnColor} text={ratings} />
      ))
     }
    </div>
  );
};

export default Card;


