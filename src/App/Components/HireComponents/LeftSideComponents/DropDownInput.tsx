import React from 'react'

const DropDownInput = () => {
    return (
        <div>
            <div className="px-5 pt-2">
                <p className="text-sm font-bold text-gray-600">
                    PRIMARY TAG
                </p>
                    <select id="tags" className="border rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                        <option value="Select primary tag">&nbsp;Select a primary tag</option>
                        <option value="Software Engineer">&nbsp;Software Engineer</option>
                        <option value="Designer">&nbsp;Designer</option>
                        <option value="Back-End Developer">&nbsp;Back-End Developer</option>
                        <option value="Dev-Ops">&nbsp;Dev-Ops</option>
                    </select>
                <p className="lg:ml-1 text-xs mt-1 text-gray-400">
                This primary tag shows first and increases visibility in the main sections. Your job is shown on every page that is tagged with though. E.g. if you tag it as PHP, it shows for Remote PHP Jobs etc.
                </p>
            </div>
        </div>
    )
}

export default DropDownInput
