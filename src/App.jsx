
import './App.css'
import Task from "./utils/task.jsx"

function App() {

  return (
    <>
      <h1 className='text-5xl py-10'>Remind-me 📝</h1>
      <header className='flex flex-row rounded-2xl outline outline-neutral-600 outline-2 bg-neutral-800 px-2 py-1 w-max mx-auto'>
        <p className='text-xl px-3'>Filter:</p>
        <button id='filterButton' className='bg-red-500 rounded-2xl px-3 glass bg-opacity-40'>Not completed</button>
      </header>

      <div className="py-12 grid md:grid-cols-2">
        {Task(1, "Tarea exposicion y comprension", "Terminar la tarea que es de la pagina 92 a la 102")}
        {Task(1, "Tarea exposicion y comprension", "Terminar la tarea que es de la pagina 92 a la 102")}
        {Task(1, "Tarea exposicion y comprension", "Terminar la tarea que es de la pagina 92 a la 102")}
      </div>
    </>
  )
}

export default App
