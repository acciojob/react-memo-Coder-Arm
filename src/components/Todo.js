import React, { useState } from 'react';

const Todo = () => {
     const [tasks,setTasks] = useState([]);
    return(<>
    <h2>My Todos</h2>
    {
    tasks.map(task => {
        return <div>{task}</div>
    })}
     <button onClick={()=> setTasks([...tasks, "New Todo"])}>Add Todo</button>
    </>)
}
export default Todo