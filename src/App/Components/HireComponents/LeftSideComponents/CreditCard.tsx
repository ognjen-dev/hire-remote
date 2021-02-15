import React from 'react'

const CreditCard = () => {
    return (
        <div className="lg:ml-2 mx-2 lg:flex flex flex-col justify-center lg:justify-between items-center">
            <div className="lg:flex lg:flex-row flex flex-col items-center justify-center border rounded-md bg-gray-50 block flex-1 mx-3 h-12 focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                <p>💳<input type="text" className="mr-2 lg:py-0 py-1" placeholder="Card Number" /></p>
                <input type="text" className="ml-3 mt-1 lg:ml-0 lg:mt-0 lg:py-0 py-1" placeholder="MM/YY CVC" />
            </div>
            <div className="flex flex-col text-xs flex-1 mt-1 text-gray-400">
                <p>🔐 Secure payment guaranteed by Stripe over HTTPS</p>
                <p>💳 Card is only charged when you press "Post your Job"</p> 
            </div>
        </div>
    )
}

export default CreditCard
