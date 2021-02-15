import React from 'react'
// @ts-ignore
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

const PageHeader = () => {
    return (
        <div className="border-b">
            <div className="flex justify-between items center m-4 pb-2">

                <a href="/" className="self-center text-2xl font-bold hover:opacity-60">BUSINESS LOGO</a>

                <p className="text-3xl font-bold mt-1 md:block hidden">Hire Remotely</p>

                <button >
                    <Link to="/" className="hover:border-red-600 hover:text-red-600 hover:bg-transparent ml-3 inline-flex items-center px-2 py-2 mr-2 lg:px-4 lg:py-2 border-red-500 border-2 rounded-lg bg-red-500 text-md font-medium text-white" >Buy <p className="md:block hidden">&nbsp;a&nbsp;</p>bundle</Link>
                </button>

            </div>
        </div>
    )
}

export default PageHeader
