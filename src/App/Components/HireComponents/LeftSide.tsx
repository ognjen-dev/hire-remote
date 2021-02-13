import React from 'react'
import LetsStart from 'App/Components/HireComponents/LeftSideComponents/LetsStart'

const LeftSide = () => {
    return (
        <>
        <fieldset className="border w-full min-h-screen rounded-md lg:mx-6 mb-6 mt-5">
            <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">LET'S START</p></legend>
            <LetsStart />
        </fieldset>
        </>
    )
}

export default LeftSide
