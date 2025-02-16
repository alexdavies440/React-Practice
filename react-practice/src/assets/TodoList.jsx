import { useState, useRef } from "react";

export default function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if(newTask.trim !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index) {
        
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {

        if (index < tasks.length -1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    const draggedTask = useRef(0);
    const draggedOverTask = useRef(0);

    function handleSwap() {
        const updatedTasks = [...tasks];
        [updatedTasks[draggedTask.current], updatedTasks[draggedOverTask.current]] = 
            [updatedTasks[draggedOverTask.current], updatedTasks[draggedTask.current]];
        setTasks(updatedTasks);
    }

    return(
        <div className="todo-list">

            <h1>To-Do List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>✚</button>
            </div>

            <ol>
                {tasks.map((task, index) => {
                    return (
                        <li 
                        key={index}
                        draggable
                        onDragStart={() => draggedTask.current = index}
                        onDragEnter={() => draggedOverTask.current = index}
                        onDragEnd={handleSwap}
                        onDragOver={(e) => e.preventDefault()}
                        >
                            <span className="drag">≣&nbsp;&nbsp;</span><span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>X</button>
                            {/* <button className="move-button" onClick={() => moveTaskUp(index)}>▲</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>▼</button> */}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}