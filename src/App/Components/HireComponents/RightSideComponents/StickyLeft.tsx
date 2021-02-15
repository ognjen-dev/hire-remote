import React from 'react'

const StickyLeft = () => {
    return (
        <div className="h-24 flex flex-row fixed bottom-0 justify-between w-4/6 border-t z-20 items-center bg-white">
            <div>
                <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitch-square2-512.png" alt="yo" className="bg-white ml-10 w-11 h-11"/>
            </div>
            <div className="-ml-32">
                <p className="font-bold">Position</p>
                <p>Company</p>
            </div>
            <div className="flex flex-wrap">
                <button><p className="font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border-2 text-xs border-black hover:bg-black hover:text-white rounded-md py-0.5 w-max">TAG</p></button>
                <button><p className="font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border-2 text-xs border-black hover:bg-black hover:text-white rounded-md py-0.5 w-max">TAG</p></button>
                <button><p className="font-mono px-1 mx-0.5 my-0.5 lg:mx-1 lg:my-0.5 lg:border-2 font-semibold border-2 text-xs border-black hover:bg-black hover:text-white rounded-md py-0.5 w-max">TAG</p></button>
            </div>
            
            <div>
                <p className="opacity-40 border border-black text-black border-dashed text-medium font-semibold rounded-md px-12 py-2">
                    Apply 
                </p>
            </div>
        </div>
    )
}

export default StickyLeft
