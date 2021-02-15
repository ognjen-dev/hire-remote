import React from 'react'

interface SmallAdProps {
    row1:string
    row2:string
    row3:string
}

const SmallAd = ({ row1, row2, row3 }:SmallAdProps) => {
    return (
        <div className="border-b py-4 lg:w-full w-full">
            <div className="flex lg:flex flex-col lg:flex-col items-center py-3">
                <p className="text-l">{row1}</p>
                <p className="lg:font-medium font-medium text-2xl text-center my-2 leading-5">{row2}</p>
                <p className="text-l">{row3}</p>
            </div>
        </div>
    )
}

export default SmallAd
