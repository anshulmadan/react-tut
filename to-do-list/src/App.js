import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {

  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task]);
  }

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => id !== task.id));
  }

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id){
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type='text' placeholder='Task' onChange={(event) => setNewTask(event.target.value)}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (<Task 
                    taskName={task.taskName} 
                    id={task.id} 
                    deleteTask={deleteTask} 
                    completeTask={completeTask}
                    completed={task.completed}
                  />
          );
        })}
      </div>
    </div>
  );
}

export default App;
