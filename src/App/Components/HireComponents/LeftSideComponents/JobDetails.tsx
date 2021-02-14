import React from 'react'
import SalaryRange from 'App/Components/HireComponents/LeftSideComponents/SalaryRange'
import RichText from 'App/Components/HireComponents/LeftSideComponents/RichText'
import InputField from 'App/Components/HireComponents/LeftSideComponents/InputField'

const JobDetails = () => {
    return (
        <div>
            <div className="ml-4">
                <p className="flex flex-col mx-1 font-bold text-sm text-gray-700">COMPANY LOGO (.JPG OR .PNG)</p>
                <button className="mt-3 text-gray-500 lg:px-10 lg:py-14 rounded-md border border-gray-300 bg-gray-50">💾 Upload</button>
            </div>
            <SalaryRange desc="Not required but HIGHLY recommended, because Google does NOT index jobs without salary data! Write it preferrably in US DOLLARS PER YEAR, like $75,000. If you pay hourly, or monthly, please convert to annual equivalent yourself (hourly rate * 8h * 22d * 12mo OR monthly salary * 12mo). Our robot can also convert it but it's not perfect and it might make a mistake if you enter it differently than annual. If not sure, write an indication of the salary." />
            <RichText title="JOB DESCRIPTION* (READ HERE HOW TO USE MARKDOWN)" />
            <RichText title="HOW TO APPLY?" />
            <div className="mt-5">
                <InputField header="APPLY URL*" desc="Apply URLs with a form an applicant can fill out generally receive a lot more applicants than having people apply by email (below). A good platform to have applicants apply on is Lever.co (not affiliated)." placeholder="" />
            </div>
            <div className="mt-5">
                <InputField header="APPLY EMAIL*" desc="This email is public, the Apply button links to it if you do not supply an Apply URL above." placeholder="" />
            </div>
        </div>
    )
}

export default JobDetails
