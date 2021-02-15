import React from 'react'



const PayLater = () => {
    return (
        <div>
            <div className="px-5 pt-2">
                <p className="text-sm font-bold text-gray-600">
                    PAY LATER
                </p>
                <input type="checkbox" className="border rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder={`${placeholder}`} />
                    <p className="lg:ml-1 text-md mt-1 text-black">
                        I'd like to pay later
                    </p>
            </div>
        </div>
    )
}

export default InputField