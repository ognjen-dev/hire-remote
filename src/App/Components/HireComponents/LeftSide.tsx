import React from 'react'
import LetsStart from 'App/Components/HireComponents/LeftSideComponents/LetsStart'
import CheckBoxList from 'App/Components/HireComponents/LeftSideComponents/CheckBoxList'

const LeftSide = () => {
    return (
        <div className="lg:mr-12">
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">LET'S START</p></legend>
                    <LetsStart />
                </fieldset>
            </>
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">DESIGN YOUR JOB POST</p></legend>
                    <CheckBoxList />
                </fieldset>
            </>
        </div>
    )
}

export default LeftSide
