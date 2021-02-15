import React from 'react'
import Partners from 'App/Components/HireComponents/RightSideComponents/Partners'
import Ads from 'App/Components/HireComponents/RightSideComponents/Ads'
import Reviews from 'App/Components/HireComponents/RightSideComponents/Reviews'

const RightSide = () => {
    return (
        <div className="border lg:w-3/5 w-full min-h-full flex flex-col items-center p-4 lg:pb-20">
            <Partners />
            <Ads />
            <Reviews />
        </div>
    )
}

export default RightSide
