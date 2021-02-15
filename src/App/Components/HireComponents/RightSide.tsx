import React from 'react'
import Partners from 'App/Components/HireComponents/RightSideComponents/Partners'
import Ads from 'App/Components/HireComponents/RightSideComponents/Ads'

const RightSide = () => {
    return (
        <div className="border w-3/5 min-h-full flex flex-col items-center p-4">
            <Partners />
            <Ads />
        </div>
    )
}

export default RightSide
