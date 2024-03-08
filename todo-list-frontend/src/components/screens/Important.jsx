import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Task from '../Task';

function Important() {

  const [input, setInput] = useState('');
  const [task, setTask] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    console.log("Retrieved tasks from local storage:", storedTasks);
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
    console.log("Saved tasks to local storage:", task);
  }, [task]);


  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleClick = (event) => {
    if (input.trim() !== '') {
      setTask([...task, input])
      // console.log(task);
      setInput(event.target.value = '');
    }
  }



  const handleEdit = (editedTask, index) => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...task];
      updatedTasks[index] = editedTask;
      setTask(updatedTasks);
    }
  }

  const handleDelete = (index) => {
    const updatedTasks = [...task]
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
    // console.log(deletedTask)
  }

  return (
    <div className=' bg-neutral-800
    flex flex-col min-h-screen
     text-white
      p-10 
       bg-cover 
       bg w-full'>
      {/* <Header children={"Important"} /> */}
      <Header>
        <div className=' inline-flex  items-center gap-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <div>Important</div></div>
      </Header>
      <div className="flex-1 overflow-y-auto max-h-[68vh] w-full items-center justify-center">

      

       {
          (task != []) ? (
            task.map((task, index) => (
              <Task key={index} task={task} onEdit={(editedTask) => handleEdit(editedTask, index)} onDelete={() => handleDelete(index)} />
            ))
          ): (
            <img src="./assets/important-task.png" alt="Not found" />
          )
          
        }


      </div>
      <div className=" inline-flex w-full align-middle relative bottom-0 justify-center">
        <input type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-3 px-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={input}
          placeholder="Enter something..."
          onChange={handleChange}
        >


        </input>
        <button type="button" className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm py-3 px-4  ml-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          // Add event to the code
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Important