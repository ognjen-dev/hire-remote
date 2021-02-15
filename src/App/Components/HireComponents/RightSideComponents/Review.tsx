import React from 'react'

interface ReviewProps {
    quote: string
    name: string
    position: string
    company:string 
}

const Review = ({ quote, name, position, company }) => {
    return (
        <div>
            <div className="flex lg:flex flex-col md:flex-col items-center lg:items-center py-6 border-b">
                <div className="w-1/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="my-3 text-center font-medium">
                    "{quote}"
                </p>
                <p className="flex lg:flex">
                    -<a href="#" className="underline font-bold text-red-500">{name}</a>, {position} at&nbsp;<a href="#" className="underline font-bold text-red-500">{company}</a>
                </p>
            </div>
        </div>
    )
}

export default Review
