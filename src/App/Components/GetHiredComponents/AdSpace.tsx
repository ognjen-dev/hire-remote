import React from 'react'

const AdSpace = () => {
    return (
        <div className="md:block hidden">
            <div>
                <a href="/" className="flex justify-center items-center -mt-12 py-6 bg-gray-50 hover:bg-gray-100 w-full">
                    👉 Hiring remotely? Reach &nbsp;<p className="underline font-bold">1,000,000+ remote workers&nbsp;</p> on the 🏆 #1 remote jobs board
                    <button className="hover:border-red-600 hover:text-red-600 hover:bg-transparent ml-3 inline-flex items-center px-2 py-2 mr-2 lg:px-4 lg:py-2 border-red-500 border-2 rounded-lg bg-red-500 text-sm font-medium text-white">Post a job</button>
                    <button className="border-red-600 text-red-600 bg-transparent ml-3 inline-flex items-center px-2 py-2 mr-2 lg:px-4 lg:py-2 hover:border-red-500 border-2 rounded-lg hover:bg-red-500 text-sm font-medium hover:text-white">Hide this</button>
                </a>
            </div>
        </div>
    )
}

export default AdSpace
