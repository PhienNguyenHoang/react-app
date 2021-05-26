import { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(1);
  // const [color, setColor] = useState('');
  const fetchCounter = () => 1;
  const colors = ['red', 'yellow', 'green'];
  useEffect(() => {
    setCount(fetchCounter());
  }, [])

  // useEffect(() => {
  //   setColor(colors[count % 3])
  // }, [count])
  // console.log("🚀 ~ file: App.js ~ line 5 ~ App ~ color", color)
  const color = colors[count % 3];
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', backgroundColor: `${color}` }}>
      <div>Counter: {count}</div>
      <button onClick={() => {setCount(count + 1)}}>
        increase
      </button>
    </div>
  );
}

export default App;
