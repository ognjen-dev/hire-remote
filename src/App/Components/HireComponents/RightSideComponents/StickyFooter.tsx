import React from 'react'
import StickyLeft from 'App/Components/HireComponents/RightSideComponents/StickyLeft'
import StickyRight from 'App/Components/HireComponents/RightSideComponents/StickyRight'

const StickyFooter = () => {
    return (
        <div className="flex flex-row justify-between">

            <div className="border-t h-24">
                <StickyLeft />
            </div>

            <div>
                <StickyRight />
            </div>
            
        </div>
    )
}

export default StickyFooter
