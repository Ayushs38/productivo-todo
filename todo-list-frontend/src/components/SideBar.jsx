import React from 'react'
import SearchInput from './SearchInput'
import SideBarButton from './SideBarButton'

function SideBar() {
    return (
        <div className=' bg-stone-900 w-[300px] h-screen '>
            <div className=" p-3 ml-10">
                <button className=" bg-green-700 text-white hover:bg-green-900 px-4 py-1 rounded-xl font-bold mr-2">Login</button>
                <button className=" bg-green-700 text-white hover:bg-green-900 px-4 py-1 rounded-xl font-bold mr-2">Register</button>
            </div>
            <div className=" p-3">
                <SearchInput />
                <hr className=' mt-2' />
            </div>
           
            <div className="flex flex-col gap-y-1  px-3">
                <SideBarButton path="" >My Day</SideBarButton>
                <SideBarButton path="important" >Important</SideBarButton>
                <SideBarButton path="planned" >Planned</SideBarButton>
                <SideBarButton path="assigned-to-me" >Assigned To me</SideBarButton>
                <SideBarButton path="flagged-to-me" >Flagged To me</SideBarButton>
                <SideBarButton path="all-tasks" >Task</SideBarButton>
             

                <hr className='mt-2' />
            </div>


        </div>
    )
}

export default SideBar