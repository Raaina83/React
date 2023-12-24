import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import "./ToDo.css"

export default function ToDo(){
    let [todos, setTodos]  =useState([{task:"sample task", id:uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addTasks = () =>{
        setTodos((prevTodos) =>{
            return [...prevTodos, {task: newTodo, id:uuidv4(), isDone: false}]
        });
        setNewTodo("");
    }

    let newTask = (event) =>{
        setNewTodo(event.target.value);
        // event.target.value = "";
    }

    let dltTask = (id) =>{
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let upperCaseAll = () =>{
        setTodos(todos.map((todo) =>{
            return{
                ...todo, task: todo.task.toUpperCase(),
            };
        }));
    }

    let upperCaseOne = (id) =>{
        setTodos(todos.map((todo) =>{
            if(todo.id == id){
                return{
                    ...todo, task: todo.task.toUpperCase(),
                };
            } else{
                return todo;
            }
        }));
    }

    let markDone = (id) =>{
        setTodos(todos.map((todo) =>{
            if(todo.id == id){
                return{
                    ...todo, isDone:true,
                };
            } else{
                return todo;
            }
        }));
    }

    let markAllDone = () =>{
        setTodos(todos.map((todo) =>{
            return{
                ...todo, isDone: true,
            };
        }));
    }
    return(
        <div>
            <input placeholder="Enter task to do" className="task-input" onChange={newTask} value={newTodo}></input>
            <button className="task-btn" onClick={addTasks}>Add task</button>
            <hr></hr>
            <h4>Tasks to do</h4>
            <ul className="task-list">
                {
                    todos.map((todo) =>(
                         <li key={todo.id} className='list'>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                            {todo.task}
                            </span>
                            <button className='dlt-btn' onClick={() => dltTask(todo.id)}>Delete task</button>
                            <button className='dlt-btn' onClick={() => markDone(todo.id)}>Mark as Done</button>
                            
                        </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone}>Mark all Done</button>
        </div>
    )
}