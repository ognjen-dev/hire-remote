import React from 'react'
import PageHeader from 'App/Components/SharedComponents/PageHeader'
import LeftSide from 'App/Components/HireComponents/LeftSide'
import RightSide from 'App/Components/HireComponents/RightSide'

const Hire = () => {
    return (
        <div>
            <PageHeader />
            <div className="lg:flex lg:flex-row flex flex-col">
                <LeftSide />
                <RightSide />
            </div>

        </div>
    )
}

export default Hire
