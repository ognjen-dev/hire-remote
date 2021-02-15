import React from 'react'

const StickyRight = () => {
    return (
        <div className="z-20">
            <div className="flex flex-col items-center justify-center bg-white">
                <div className="h-24 w-full pb-5 items-center fixed bottom-0 border-t flex flex-row justify-center">
                    <div className="bg-white">
                        <button className="text-xl lg:inline-flex hover:border-red-500 -mb-5 hover:text-red-500 hover:bg-transparent ml-3 inline-flex  items-center px-24 py-2 border-red-500 border-2 rounded-lg bg-red-500 text-md font-medium text-white">
                            Post a job!
                        </button>
                    </div>

                </div>

                <p className="lg:ml-3 text-xs -mt-5 pb-3 md:block hidden sm:block hidden lg:hidden text-gray-400 text-center">
                    We'll donate 5% to remove CO₂ from the atmosphere
                </p>
            </div>
        </div>
    )
}

export default StickyRight
