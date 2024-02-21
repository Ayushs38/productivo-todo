import React from 'react'

function SearchInput() {
    return (
        <div>
            <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                    Search
                </label>
                
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-700 block w-full  p-2.5   "
                        placeholder="Search..."
                        required=""
                    />
                {/* </div> */}
                <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-900 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-400 "
                >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>

        </div>
    )
}

export default SearchInput