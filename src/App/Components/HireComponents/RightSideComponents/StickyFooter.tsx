import React from 'react'
import StickyLeft from 'App/Components/HireComponents/RightSideComponents/StickyLeft'
import StickyRight from 'App/Components/HireComponents/RightSideComponents/StickyRight'

const StickyFooter = () => {
    return (
        <div className="flex flex-row border-t">

            <div className="w-full md:block hidden">
                <StickyLeft />
            </div>

            <div className="lg:w-5/12 w-full lg:pl-14">
                <StickyRight />
            </div>

        </div>
    )
}

export default StickyFooter
