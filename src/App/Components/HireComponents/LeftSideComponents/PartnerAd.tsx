import React from 'react'

const PartnerAd = () => {
    return (
            <a href="/" className=" flex flex-row mt-5 justify-between items-center h-20 w-11/12 bg-indigo-800 text-white hover:opacity-70">
                <div>
                    <img src="https://i.pinimg.com/originals/62/d5/f7/62d5f72202c8bb96a2b77227c8061af0.png" alt="" className="w-14 h-14 ml-10" />
                </div>
                <div className="flex flex-col">
                    <p className="font-medium">The best app used by people of all ages!</p>
                    <p>The fully usable on any device app that can help you get business recongition.</p>
                </div>
                <div className="mr-10 ml-3 inline-flex items-center px-2 py-2 mr-2 lg:px-4 lg:py-2 border-blue-400 border-2 rounded-lg bg-blue-400 text-md font-medium text-white">
                    Sign up
                </div>

            </a>
    )
}

export default PartnerAd
