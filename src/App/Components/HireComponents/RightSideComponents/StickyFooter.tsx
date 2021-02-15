import React from 'react'
import StickyLeft from 'App/Components/HireComponents/RightSideComponents/StickyLeft'
import StickyRight from 'App/Components/HireComponents/RightSideComponents/StickyRight'

const StickyFooter = () => {
    return (
        <div className="flex flex-row border-t h-14 fixed left-0 bottom-10 bg-white w-full justify-center">

            <div className="w-full lg:block hidden">
                <StickyLeft />
            </div>

            <div className="lg:w-5/12 w-full bg-white lg:pl-14">
                <StickyRight />
            </div>

        </div>
    )
}

export default StickyFooter
