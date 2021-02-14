import React from 'react'
import AdSpace from 'App/Components/GetHiredComponents/AdSpace'
import Job from 'App/Components/GetHiredComponents/Job'

const Jobs = () => {
    return (
        <div>
            <ul className="px-0 lg:px-52 lg:mt-10 mt-2">
                <AdSpace />
                <Job txt="gray" bgcolor="blue" position="Junior Developer" employer="Facebook" img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" />
                <Job txt="black" bgcolor="yellow" position="Senior Full-Stack" employer="Google" img="data:image/png;base64,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" />
                <Job txt="black" bgcolor="pink" position="Graphic Designer" employer="Netlify" img="https://www.netlify.com/img/press/logos/logomark-light.png" />

            </ul>
        </div>
    )
}

export default Jobs
