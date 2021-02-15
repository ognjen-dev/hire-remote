import React from 'react'



const PayLater = () => {
    return (
        <div className="ml-5 mt-5">
            <p className="text-sm font-bold -mb-2 text-gray-600">
                PAY LATER
            </p>
            <div className="flex flex-row items-center my-4 hover:opacity-70">
                <input className="form-checkbox lg:h-5 lg:w-5 text-blue-600" type="checkbox" />
                <label className="flex flex-row">
                    <p className="ml-2 lg:text-md text-sm">I would like to pay later.</p>
                </label>
            </div>
            <p className="lg:ml-0 text-xs -mt-3 text-gray-400">
            Need to get approval for this payment? Or send the invoice to your finance department first? No problem, we'll save your job post and send you (and your finance department below) a payment link. Once it's paid we immediately publish it!
            </p>
        </div>
    )
}

export default PayLater