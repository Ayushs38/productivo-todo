import React, { useState } from 'react'
import CheckBox from './CheckBox';

function Task({ task, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEditTask = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        onEdit(editedTask);
        setIsEditing(false);
    }

    const handleInputChange = (event) => {
        setEditedTask(event.target.value);
    }

    const handleDeleteTask = (index)=>{
        onDelete(index);
    }


    
    return (
        <>
            <div className=" mt-3 ">
                {
                    isEditing ? (
                        <div className='flex items-center'>
                            <input type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-3 px-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={editedTask}
                                onChange={handleInputChange}
                            >
                            </input>
                            <button className=' p-2 ml-3 bg-green-400/50  rounded-xl hover:bg-green-800' onClick={handleSaveClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>


                            </button>
                        </div>


                    ) : (
                        <div className='flex items-center'>
                            <div className=" inline-flex gap-x-2 bg-gray-500/80 text-white text-lg py-3 px-3 w-full rounded-xl">
                                <CheckBox/>
                                {task}</div>
                            <div className=" inline-flex">

                                {/* Edit button  */}
                                <button className=' p-2 ml-3 bg-blue-500/40 rounded-xl hover:bg-blue-800' onClick={handleEditTask}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>

                                </button>

                                {/* Delete task button */}
                                <button className=' p-2 ml-3  bg-red-500/40 rounded-xl hover:bg-red-800' onClick={handleDeleteTask}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>


                                </button>
                            </div>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default Task