{todos.map((value, index) => {
  return (
    <div className='flex max-w-5xl gap-4 my-5 py-5 px-5 bg-slate-700 rounded '>

      <div>
        <p className='text-base'>{index + 1}. {value.todo}</p>
        <div className='flex gap-4'>
          <div>
            <p>Date Added: </p>
            <p>{value.date.format}</p>
          </div>
          <div>
            <p>Completed: </p>
            {() => {
              if (value.status) {
                return <p>True</p>
              } else {
                return <p>False</p>
              }
            }}
          </div>
        </div>
      </div>

      <button onClick={() => {
        const arr = removeByAttr(todos, "id", value.id);
        setTodos(arr);
        localStorage.setItem('todos', JSON.stringify(arr))

        window.location.reload();
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-6 w-10 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-6 w-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>

    </div>
  )
})}