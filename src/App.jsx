import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  console.log("atualizou o componente", items);
  return (
    <>
      <div className="wrapper">
        <div className="onibus">
          {items.map(() => (
            <div></div>
          ))}
        </div>
        <button onClick={() => setItems([...items, "*"])}>adicionar</button>
      </div>
    </>
  );
}

export default App;
