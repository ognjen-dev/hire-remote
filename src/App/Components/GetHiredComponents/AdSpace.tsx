import React from 'react'

const AdSpace = () => {
    return (
        <div className="">
            <div>
                <a href="/" className="lg:flex lg:flex-row lg:justify-center flex flex-col items-center lg:items-center lg:-mt-12 lg:py-6 py-2 bg-gray-50 hover:bg-gray-100 w-full">
                    👉 Hiring remotely? Reach &nbsp;<p className="underline font-bold">1,000,000+ remote workers&nbsp;</p> on the 🏆 #1 remote jobs board
                    <div className="lg:pt-0 pt-2 flex flex-row max-h-16">
                        <button className="hover:border-red-600 hover:text-red-600 hover:bg-transparent ml-3 inline-flex items-center px-2 py-2 mr-2 lg:px-4 lg:py-2 border-red-500 border-2 rounded-lg bg-red-500 text-sm font-medium text-white">Post <p className="md:block hidden">&nbsp;a&nbsp;</p> job</button>
                        <button className="border-red-600 text-red-600 bg-transparent ml-3 inline-flex items-center px-2 py-2 mr-2 lg:px-4 lg:py-2 hover:border-red-500 border-2 rounded-lg hover:bg-red-500 text-sm font-medium hover:text-white">Hide this</button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AdSpace
