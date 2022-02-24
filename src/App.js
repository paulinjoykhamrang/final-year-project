import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [warning, setWarning] = useState(false);
  const [count, setCount] = useState(1);
  const [imp, setImp] = useState(0);
  const [ef, setEf] = useState(0);
  const isUnSafe = (imp, ef) => {
    if (ef > 6.2) return true;
    else return false;
  };

  const handleClick = (imp, ef) => {
    if (isUnSafe(imp, ef)) {
      setWarning(true);
    } else {
      setWarning(false);
    }
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1 className="heading">Final Year Project</h1>
      {warning && count > 1 && (
        <div className="warning">
          <h3 className="unsafeWarning">NOT SAFE</h3>
        </div>
      )}
      {!warning && count > 1 && (
        <div className="warning">
          <h3 className="safeWarning">SAFE</h3>
        </div>
      )}
      <div className="body" style={count <= 1 ? { marginTop: "40vh" } : {}}>
        <label for="impedence">Impedence</label>
        <input
          type="number"
          name="impedence"
          onInput={(e) => {
            setImp(e.target.value);
          }}
        />
        <label for="current">Magnetic Field Intensity</label>
        <input
          type="number"
          name="electricField"
          onInput={(e) => {
            setEf(e.target.value);
          }}
        />
        <button
          type="submit"
          className="button"
          onClick={() => {
            handleClick(imp, ef);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
