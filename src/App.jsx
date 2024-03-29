import "./App.css";
import Task from "./utils/task.jsx";

function App() {
  return (
    <>
      <h1 className="text-5xl py-10">Remind-me 📝</h1>
      <input
        placeholder="Insert title here."
        className="p-2 rounded-2xl text-center outline-neutral-700 bg-neutral-800 outline-2 outline focus:outline-blue-600 focus:outline-3 w-96"
      ></input>

      <input
        placeholder="Insert description here."
        className="p-2 mt-2 md:mt-0 lg:mt-0 md:ml-6 text-center rounded-2xl outline-neutral-700 bg-neutral-800 outline-2 outline focus:outline-blue-600 focus:outline-3 w-96"
      ></input>

      <div className="py-12 grid md:grid-cols-2 justify-center">
        {Task(
          1,
          "Tarea exposicion y comprension",
          "Terminar la tarea que es de la pagina 92 a la 102"
        )}

        {Task(
          1,
          "Tarea exposicion y comprension",
          "Terminar la tarea que es de la pagina 92 a la 102"
        )}
      </div>
    </>
  );
}

export default App;
