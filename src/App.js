
import { useState } from 'react';
import './App.css';


function App() {
  
  const [price, setPrice] = useState(2);
  const [meat, setMeat] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [salad, setSalad] = useState(0);
  
  

  function addMeat() {
    setMeat(meat + 1);
    setPrice(price+3);
  }

  function removeMeat() {
    if (meat > 0) {
      setMeat(meat - 1);
      setPrice(price-3);
  }
  }

  function addCheese() {
    setCheese(cheese + 1);
    setPrice(price+ 2);
  }

  function removeCheese() {
    if (cheese > 0) {
      setCheese(cheese - 1);
      setPrice(price-2);
    }
  }

  function addSalad() {
    setSalad(salad + 1);
    setPrice(price+1);
  }

  function removeSalad() {
    if (salad > 0) {
      setSalad(salad - 1);
      setPrice(price-1);
    }
  }


  return (
    
    <div className="App">
      <>
        <div className="top-bun"></div>
        {/* {salad > 0 && <div className="salad"></div>}
        {cheese > 0 && <div className="cheese"></div>} */}
        {/* {meat > 0 && <div className="meat"></div>} */}
        {Array(salad).fill().map((_, index) => (
          <div key={index} className="salad"></div> ))}
        {Array(cheese).fill().map((_, index) => (
          <div key={index} className="cheese"></div> ))}
        {Array(meat).fill().map((_,index) => (
          <div key={index} className="meat"></div> ))}
        <div className="bottom-bun"></div>
      </> 
      <div className="bottom">
        <h1>Total Price = ${price}</h1>
        <div className="ingre">
          <p>Meat</p>
          <button onClick={addMeat}>Add</button>
          <button onClick={removeMeat}>Remove</button>
        </div>
        <div className="ingre">
          <p>Cheese</p>
          <button onClick={addCheese}>Add</button>
          <button onClick={removeCheese}>Remove</button>
        </div>
        <div className="ingre">
          <p>Salad</p>
          <button onClick={addSalad}>Add</button>
          <button onClick={removeSalad}>Remove</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;

