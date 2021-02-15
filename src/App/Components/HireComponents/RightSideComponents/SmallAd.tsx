import React from 'react'

interface {
    row1:string
    row2:string
    row3:string
}

const SmallAd = () => {
    return (
        <div className="flex lg:flex flex-col lg:flex-col items-center py-4 border-b">
            <p className="text-s">{row1}</p>
            <p className="font-bold text-xl leading-5">{row2}</p>
            <p className="text-s">{row3}</p>
        </div>
    )
}

export default SmallAd
