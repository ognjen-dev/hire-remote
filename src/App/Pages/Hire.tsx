import React from 'react'
import PageHeader from 'App/Components/SharedComponents/PageHeader'
import LeftSide from 'App/Components/HireComponents/LeftSide'
import RightSide from 'App/Components/HireComponents/RightSide'
import StickyFooter from 'App/Components/HireComponents/RightSideComponents/StickyFooter'



const Hire = () => {
    return (
        <div>
            <PageHeader />
            <div className="lg:flex lg:flex-row flex flex-col">
                <LeftSide />
                <RightSide />
            </div>
            <div className="w-full h-24 fixed bottom-0 bg-white z-10"></div>

        </div>
    )
}

export default Hire
