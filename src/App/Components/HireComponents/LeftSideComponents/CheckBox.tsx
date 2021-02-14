import React from 'react'

interface CheckProps {
    placeholder: string
    multiplier: string
    addCost: string
}

const CheckBox = ({ placeholder, multiplier, addCost }:CheckProps) => {
    return (
        <div className="flex flex-row items-center my-4 hover:opacity-70">
            <input className="form-checkbox lg:h-5 lg:w-5 text-blue-600"  type="checkbox" />
            <label className="flex flex-row">
                <p className="ml-2 lg:text-md text-sm">{placeholder} &nbsp;(+${addCost})</p> <p className="ml-3 border rounded-md px-1 py-0.5 text-xs border-red-600 font-medium text-red-600 md:block hidden">{multiplier}X MORE VIEWS</p>
            </label>
        </div>
    )
}

export default CheckBox
