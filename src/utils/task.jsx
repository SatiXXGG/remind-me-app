import { useState } from "react";

function task({ id, title, description, deleteTask }) {
  const [isDone, setDone] = useState(false);
  const [canDelete, setCanDelete] = useState(true);
  const text = isDone ? "X" : "✔"; //si esta completada el texto sera una X si no lo lo esta sera una paloma
  const component = isDone ? "status green" : "status";
  const component2 = canDelete ? "delete transparent" : "delete";

  const handleClick = () => {
    setDone(!isDone);
    setCanDelete(!canDelete);
  };

  const deleteClick = () => {
    console.log(id);
    deleteTask(id);
    alert("Eliminando...");
  };

  return (
    <div
      key={id}
      id={id}
      className="my-3 relative outline-neutral-800 
            flex flex-col outline-3 outline rounded-2xl md:w-[30vw] h-[30vh] w-[89vw] "
    >
      <p id="title" className="py-3 ml-5 text-2xl md:text-3xl text-left">
        {title}
      </p>

      <p
        id="description"
        className="text-lg md:text-xl ml-9 text-left opacity-55 
                transition-opacity duration-200 hover:opacity-100"
      >
        {'"' + description + '"'}
      </p>

      <div id="status" className={component}></div>

      <button
        className="absolute bottom-3 right-3 text-xl cursor-pointer"
        onClick={handleClick}
      >
        {text}
      </button>

      <button className={component2} onClick={deleteClick}>
        Delete
      </button>
    </div>
  );
}

export default task;
