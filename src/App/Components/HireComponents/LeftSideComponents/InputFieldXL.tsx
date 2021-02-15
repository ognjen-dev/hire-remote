import React from 'react'

interface InputFieldProps {
    header: string
    desc: string
    placeholder: string
} 

const InputField = ({ header, desc, placeholder }:InputFieldProps) => {
    return (
        <div>
            <div className="px-5 pt-2">
                <p className="text-sm font-bold text-gray-600">
                    {header}
                </p>
                <textarea className="h-24 border bg-gray-50 rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder={`${placeholder}`} />
                    <p className="lg:ml-1 text-xs mt-1 text-gray-400">
                    {desc}
                    </p>
            </div>
        </div>
    )
}

export default InputField
