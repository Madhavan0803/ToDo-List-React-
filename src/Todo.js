import { useState } from "react";

function Todo() 
{
    const [list, setlist] = useState([{ id: 1, activity: "apple" }, { id: 2, activity: "orange" }])
    const [newlist, setnewlist] = useState("")

    function handleDelete(removeid) 
    {
        var temparr = list.filter(function (item) {
            return item.id !== removeid
        })
        setlist(temparr)
    }

    function handleChange(evt)
    {
        setnewlist(evt.target.value)
    }

    function AddElement() 
    {
            setlist([...list, { id: list.length + 1, activity: newlist }])
            setnewlist("")
    }

    return (
<>
    <div className="todo-container">
        <h1>ToDo List</h1>
        <input value={newlist} onChange={handleChange} placeholder="Add a new task" />
        <button onClick={AddElement}>Add</button>
        <ul>
            {list.map(function (item) {
                return (
                    <li className="todo-item" key={item.id}>
                        {item.activity}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
</>
    )
}

export default Todo
