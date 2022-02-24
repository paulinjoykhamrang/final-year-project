import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [warning, setWarning] = useState(false)
  const [warningText, setWarningText] = useState('SAFE')
  const [count, setCount] = useState(1)

  const isSafe =(curr, vol, ef)=>{
    return true  
  }

  const handleClick = (vol, curr, ef) => {
    if(isSafe(vol, curr, ef)){
      setWarning(true)
    }else{
      setWarning(false)
    }
  }


  useEffect(() => {
    if(warning)setWarningText('SAFE')
    else setWarningText('NOT SAFE')
  }, [warning])

  return (
    <div className="App">
      <h1 className="heading">Final Year Project</h1>
      <div className="body">
        {warning && count>1 &&
        <div>
          <h3>NOT SAFE</h3>
        </div>
          }
        {!warning && count>1 &&
          <div>
            <h3>SAFE</h3>
          </div>
        }
        <label for="voltage">Voltage</label>
        <input type="number" name="voltage" />
        <label for="current">Current</label>
        <input type="number" name="current" />
        <label for="electricField">Electric field</label>
        <input type="text" name="electricField" />
        <button type='submit'>Submit</button>
      </div>
    </div>
  );
}

export default App;
