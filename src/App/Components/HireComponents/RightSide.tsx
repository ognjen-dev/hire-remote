import React from 'react'
import Partners from 'App/Components/HireComponents/RightSideComponents/Partners'
import SmallAd from 'App/Components/HireComponents/RightSideComponents/SmallAd'

const RightSide = () => {
    return (
        <div className="border w-3/5 min-h-full flex flex-col items-center p-4">
            <Partners />
            <SmallAd />
        </div>
    )
}

export default RightSide
