import React from 'react'

const Hero = () => {
    return (
        <div className="flex lg:flex lg:justify-center justify-center py-14 lg:py-16 z-0">
            <div className="lg:max-w-lg lg:w-full lg:max-w-xs">
                <label className="sr-only">search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="-ml-1 h-7 w-7 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input id="search" name="search" className="block w-full lg:w-full h-14 pl-10 pr-3 py-2 rounded-full leading-5 bg-white placeholder-black focus:shadow-md focus:outline-none focus:placeholder-black focus:ring-1 focus:ring-indigo-500 focus:border-black text-xl" placeholder="search" type="search" />
                </div>
            </div>
        </div>
    )
}

export default Hero
