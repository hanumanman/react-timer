import React from "react";
import { formatTime } from "./formatTime";

function History({ time }) {
  return (
    <div className="timer__display">
      <p>{`${formatTime(time)}`}</p>
    </div>
  );
}

export default History;
