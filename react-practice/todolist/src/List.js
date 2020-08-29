import React, { useState } from 'react';
import './List.css'

function List() {
    let [list, setList] = useState(["Grocery Shopping", "Walk Kimi", "Cook Lunch"]);
    let [listItem, setListItem] = useState("");

    return (
        <div>
            {list.map((item) => {
                return <div key={item}><label><input type="checkbox"/>{item}</label></div>
            })}
            <div>
                <label>Add more to the list: </label>
                <input placeholder="enter task" value={listItem} onChange={(event) => setListItem(event.target.value)}></input>
                <button onClick={() => setList(list.concat(listItem))}>Add to the list!</button>
            </div>
            <div>
                <button onClick={() => setList(list.splice(0, list.length - 1))}>Delete</button>
            </div>
        </div>
    );
}

export default List;

