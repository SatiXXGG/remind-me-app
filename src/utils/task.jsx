
function task(id, title, description, completed) {
    return (
        <div id={id} className="my-3 relative outline-neutral-800 flex flex-col outline-1 outline-dashed rounded-2xl md:w-[30vw] h-[30vh] w-[89vw]">
            <p className="py-3 ml-5 text-2xl md:text-3xl text-left">{title}</p>
            <p className="text-lg md:text-xl ml-5 text-left opacity-55 transition-opacity hover:opacity-100">{description}</p>
            <button id="delete" className="absolute right-3 bottom-3 w-10 h-10 rounded-xl outline-2 outline outline-red-400 transition-all hover:outline-dotted hover:scale-110 hover:rotate-12">
                <svg className="m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </button>
            <button id="setDone" className="absolute right-16 bottom-3 w-10 h-10 rounded-xl outline-2 outline outline-blue-600 transition-all hover:outline-dotted hover:scale-110 hover:rotate-12">
                <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
            </button>
            <div id="status" className="absolute right-2 top-2 w-9 h-3 bg-red-500 rounded-2xl"></div>
        </div >
    )
}

export default task