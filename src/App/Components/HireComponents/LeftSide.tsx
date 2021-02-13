import React from 'react'
import InputField from 'App/Components/HireComponents/LeftSideComponents/InputField'

const LeftSide = () => {
    return (
        <fieldset className="border w-full min-h-screen rounded-md mx-6 mb-6 mt-5">
            <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">LET'S START</p></legend>

            <div>
                <InputField />
                <InputField />
            </div>

        </fieldset>
    )
}

export default LeftSide
