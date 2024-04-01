import { useState } from "react";
import "./App.css";
import Task from "./utils/task.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const addTask = (e) => {
    e.preventDefault();
    const title = document.getElementById("titleInput");
    const description = document.getElementById("descriptionInput");
    console.log(title, description);
    console.log(title.value, description.value);

    setTasks([
      ...tasks,
      {
        title: title.value,
        description: description.value,
        id: Math.floor(Math.random() * (99999 - 1 + 1)) + 1,
      },
    ]);
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1 className="text-5xl py-10">Remind-me 📝</h1>

      <header>
        <input
          id="titleInput"
          placeholder="Insert title here."
          className="p-2 rounded-2xl text-center outline-neutral-700 bg-neutral-800 outline-2 outline focus:outline-blue-600 focus:outline-3 w-96"
        ></input>

        <input
          id="descriptionInput"
          placeholder="Insert description here."
          className="p-2 mt-2 md:mt-0 lg:mt-0 md:ml-6 text-center rounded-2xl outline-neutral-700 bg-neutral-800 outline-2 outline focus:outline-blue-600 focus:outline-3 w-96"
        ></input>
      </header>

      <button
        onClick={addTask}
        id="addTask"
        className="hover:transition-all duration-200 hover:scale-105 hover:outline-green-400 active:outline-white mt-3 justify-center rounded-xl bg-green-400 outline outline-3 outline-green-800 px-2 py-1 w-40"
      >
        Add task
      </button>

      <div className="py-12 grid md:grid-cols-2 justify-center">
        {tasks.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            title={task.title}
            description={task.description}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default App;
