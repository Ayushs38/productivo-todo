import React, { useState } from 'react'
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}
function Header({ name, children }) {
    const [currentDate, setCurrentDate] = useState(getDate());

    return (
        <div>
            <header className='flex justify-between pt-5'>
                <div className="">
                    <h1 className=" text-4xl font-semibold text-pretty">{children}</h1>
                    <p className="text-lg font-medium text-pretty">{currentDate}</p>
                </div>

            </header>
        </div>
    )
}

export default Header