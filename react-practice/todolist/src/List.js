import React, { useState } from 'react';
import './List.css'

function List({ onSubmit }) {
    let [list, setList] = useState(["Grocery Shopping", "Walk Kimi", "Cook Lunch"]);
    let [item, setItem] = useState("");

    function deleteItem() {
        setList(list.splice(0, list.length - 1));
    }

    return (
        <div>
            {list.map((item) => {
                return <div key={item}><label><input type="checkbox" />{item}</label></div>
            })}
            <div>
                <label>Add more to the list: </label>
                <input placeholder="enter task" value={item}
                    onChange={(event) => setItem(event.target.value)}></input>
                <button onClick={() => setList(list.concat(item))}>Add to the list!</button>
            </div>
            <div>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
}

export default List;


