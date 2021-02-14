import React from 'react'

interface SalaryProps {
    desc: string
}

const SalaryRange = ({ desc }: SalaryProps) => {
    return (
        <div className="ml-4 mt-4 mr-4 lg:mr-20">
            <p className="flex flex-col mx-1 font-bold text-sm text-gray-700">ANNUAL SALARY(USD)</p>
            <div className="lg:flex lg:flex-row lg:items-center flex flex-col items-center">
                <input type="text" className="border rounded-lg flex-1 block w-full lg:w-2/5 focus:ring-indigo-500 mt-3 lg:h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                <p className="text-4xl font-light mx-3 text-gray-500 lg:text-current">-</p>
                <input type="text" className="border rounded-lg flex-1 block w-full lg:w-2/5 focus:ring-indigo-500 mt-3 lg:h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
            </div>
            <p className="lg:ml-1 text-xs mt-1 text-gray-400">
                {desc}
            </p>
        </div>
    )
}

export default SalaryRange
