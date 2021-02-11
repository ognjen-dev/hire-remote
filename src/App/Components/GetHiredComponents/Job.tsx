import React from 'react'

const Job = () => {
    return (
        <div className="py-2">
            <a href="/">
                <div className="border rounded-lg flex flex-row h-24 items-center leading-6 justify-evenly">

                    <div className="-ml-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" className="w-12 h-12 rounded-md border-2 border-gray-200" />
                    </div>

                    <div className="-ml-14">
                        <p className="font-light text-sm font-normal">
                            Facebook
                        </p>
                        <p className="flex font-bold text-m">
                            Senior Developer <p className="mx-0.5">🌕</p> <p className="font-semibold text-xs px-1 my-0.5 bg-green-300 rounded-md w-max inline-flex self-center py-0.5 text-white">VERIFIED</p>
                        </p>
                        <div className="flex justify-center align-center bg-gray-300 rounded-md w-max h-max mt-1">
                            <p className="font-semibold text-xs px-1 my-0.5">
                                🌎WORLDWIDE
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="px-2">
                            <p className="font-bold border-2 text-xs border-black rounded-md p-0.5">JAVA</p>
                        </div>
                        <div className="px-2">
                            <p className="font-bold border-2 text-xs border-black rounded-md p-0.5">JAVA</p>
                        </div>
                        <div className="px-2">
                            <p className="font-bold border-2 text-xs border-black rounded-md p-0.5">JAVA</p>
                        </div>

                    </div>

                    <div className="">
                        <p className="text-sm">📌 1d</p>
                    </div>

                    <div className="-mr-10">
                        <button className="bg-red-500 py-2 px-8 rounded-xl">
                            <p className="text-bold text-white">Apply</p>
                        </button>
                    </div>

                </div>
            </a>
        </div>
    )
}

export default Job
