import React, { useState } from 'react';

function App() {

  let [list, setList] = useState("");

  const handleChange = () => {
    alert("An item has been added to the list!");
  };

  return (
    <div>
      <h1>My to-do list!</h1>
      <h3>Items: </h3>
      <ul>
        <li>Grocery Shopping</li>
        <li>Walk Kimi</li>
        <li>Vacuum and Mop</li>
        <li>{list}</li>
      </ul>
      <form>
        <label>Add more to the list: </label>
        <input type="text" placeholder="enter task"></input>
        <button>Add to the list!</button>
      </form>
    </div>
  );
}

export default App;
