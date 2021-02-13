import React from 'react'

const InputField = () => {
    return (
        <div>
            <div className="px-5 pt-2">
                <p className="text-sm font-bold text-gray-600">
                    COMPANY NAME*
                </p>
                <input type="text" className="border rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                    <p className="lg:ml-1 text-xs mt-1 text-gray-400">
                        Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc.
                    </p>
            </div>
        </div>
    )
}

export default InputField
