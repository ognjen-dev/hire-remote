import React from 'react'

const StickyRight = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="border-l h-24 items-center flex flex-row justify-center">
                <button className="font-bold text-xl lg:block hidden lg:inline-flex hover:border-red-500 hover:text-red-500 hover:bg-transparent ml-3 inline-flex items-center px-24 py-2 border-red-500 border-2 rounded-lg bg-red-500 text-md font-medium text-white">
                    Post a job!
            </button>

            </div>

            <p className="lg:ml-3 text-xs -mt-5 text-gray-400 text-center">
                We'll donate 5% to remove CO₂ from the atmosphere
            </p>
        </div>
    )
}

export default StickyRight
