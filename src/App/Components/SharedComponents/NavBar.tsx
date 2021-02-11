import React from 'react'
import BackgroundBig from '../../../Images/big-screen-bg.png'
import BackgroundSmall from '../../../Images/small-screen-bg.png'

const NavBar = () => {
    return (
        <div>
            <div className="absolute z-negative lg:opacity-100 opacity-100">
                <img src={BackgroundBig} className="lg:block md:block hidden lg:-mt-18 md:-mt-22" />
                <img src={BackgroundSmall} className="lg:hidden md:hidden block md:-mt-44 sm:-mt-36 " />
            </div>
            <div className="flex lg:flex justify-between lg:justify-between lg:p-3 lg:py-5 py-1">
                <div className="sm:block hidden self-center">
                    <button className="mr-1 w-10 h-9 border-2 border-white rounded-md shadow-sm text-xs font-medium text-white bg-none hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
                        RSS
                    </button>

                    <button className="w-10 h-9 border-2 border-white rounded-md shadow-sm text-xs font-medium text-white bg-none hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
                        API
                    </button>
                </div>

                <a href="/" className="lg:self-center self-center ml-40">
                    <p className="font-bold">
                        LOGO
                    </p>
                </a>

                <div>
                <button className="lg:block hidden lg:inline-flex hover:border-blue-300 hover:text-blue-300 hover:bg-transparent ml-3 inline-flex items-center px-4 py-2 border-blue-300 border-2 rounded-lg bg-blue-300 text-md font-medium text-white">
                        Remote
                    </button>

                    <button className="hover:border-red-600 hover:text-red-600 hover:bg-transparent ml-3 inline-flex items-center px-2 py-2 mr-2 lg:px-4 lg:py-2 border-red-500 border-2 rounded-lg bg-red-500 text-md font-medium text-white">
                        Post <p className="md:block hidden">&nbsp;a&nbsp;</p>job
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
