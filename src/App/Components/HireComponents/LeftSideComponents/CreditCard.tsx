import React from 'react'

const CreditCard = () => {
    return (
        <div className="ml-2 flex justify-center lg:justify-between items-center">
            <div className="flex flex-row items-center justify-center border rounded-md bg-gray-50 block flex-1 mx-3 h-12 focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                <p>💳<input type="text" className="mr-2" placeholder="Card Number" /></p>
                <input type="text" className="" placeholder="MM/YY CVC" />
            </div>
            <div className="flex flex-col text-xs flex-1 mt-1 text-gray-400">
                <p>🔐 Secure payment guaranteed by Stripe over HTTPS</p>
                <p>💳 Card is only charged when you press "Post your Job"</p> 
            </div>
        </div>
    )
}

export default CreditCard
