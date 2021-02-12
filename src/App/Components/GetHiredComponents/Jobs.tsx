import React from 'react'
import AdSpace from './AdSpace'
import Job from './Job'

const Jobs = () => {
    return (
        <div>
            <ul className="px-0 lg:px-56 lg:mt-10 mt-2">
                <AdSpace />
                <Job  />
                <Job />
                <Job />
            </ul>
        </div>
    )
}

export default Jobs
