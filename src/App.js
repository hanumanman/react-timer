import { formatTime } from "./formatTime";
import History from "./History";
import useTimer from "./useTimer";
import "./App.css";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splitTimeArray,
    active,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{`${formatTime(time)}`}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
      </div>
      <ul>
        {splitTimeArray.map((time) => (
          <li>
            <History time={time} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
