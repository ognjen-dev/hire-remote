import React from 'react'
import Partners from 'App/Components/HireComponents/RightSideComponents/Partners'
import Ads from 'App/Components/HireComponents/RightSideComponents/Ads'
import Reviews from 'App/Components/HireComponents/RightSideComponents/Reviews'
import StickyRight from 'App/Components/HireComponents/RightSideComponents/StickyRight'

const RightSide = () => {
    return (
        <div className="border-l border-r border-t lg:w-3/5 w-full min-h-full flex flex-col items-center p-4 lg:pb-20">
            <Partners />
            <Ads />
            <Reviews />
            <StickyRight />
        </div>
    )
}

export default RightSide
