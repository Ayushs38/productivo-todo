import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Task from '../Task';

function AllTasks() {
  
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
    <div className=' bg-[url("https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
    flex flex-col min-h-screen
     text-white
      p-10 
       bg-cover 
       bg w-full'>
      <Header children={"My Day"} />
      <div className="flex-1 overflow-y-auto max-h-[68vh] w-full">
        {
          task.map((task, index) => (
            <Task key={index} task={task} onEdit={(editedTask) => handleEdit(editedTask, index)} onDelete={() => handleDelete(index)} />
          ))
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

export default AllTasks