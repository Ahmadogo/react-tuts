import React, { useState } from "react";
import Cards from "./shared/Cards";

const FeedbackItem = ({ list }) => {
  const [reverse, setReverse] = useState(true);
  const { rating, text, id } = list;
  return (
    <Cards className="card" reverse={reverse}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <div className="id-display">{id}</div>

      <button
        onClick={() => {
          setReverse(!reverse);
        }}
      >
        Magic Btn
      </button>
    </Cards>
  );
};

export default FeedbackItem;
