import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef({ disabled: false });
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    if (isStart.current === true) {
      refInterval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    active.current.disabled = true;
    console.log(` at start timer ${active.current.disabled}`);
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime((prevTime) => (prevTime = 0));
    active.current.disabled = false;
    setSplitTimeArray([]);
  };

  const [splitTimeArray, setSplitTimeArray] = useState([]);
  const splitTimer = () => {
    setSplitTimeArray((prevTime) => [...prevTime, time]);
  };
  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    splitTimeArray,
  };
};
export default useTimer;
