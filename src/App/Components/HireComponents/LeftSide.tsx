import React from 'react'
import LetsStart from 'App/Components/HireComponents/LeftSideComponents/LetsStart'
import CheckBoxList from 'App/Components/HireComponents/LeftSideComponents/CheckBoxList'
import JobDetails from 'App/Components/HireComponents/LeftSideComponents/JobDetails'
import Company from 'App/Components/HireComponents/LeftSideComponents/Company'
import StickyLeft from 'App/Components/HireComponents/RightSideComponents/StickyLeft'
import InputFieldXL from 'App/Components/HireComponents/LeftSideComponents/InputFieldXL'
import Preview from 'App/Components/HireComponents/LeftSideComponents/Preview'
import PartnerAd from 'App/Components/HireComponents/LeftSideComponents/PartnerAd'


const LeftSide = () => {
    return (
        <div className="lg:mr-12 lg:pb-40">
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">LET'S START</p></legend>
                    <LetsStart />
                </fieldset>
            </>
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">DESIGN YOUR JOB POST</p></legend>
                    <CheckBoxList />
                </fieldset>
            </>
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">JOB DETAILS</p></legend>
                    <JobDetails />
                </fieldset>
            </>
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">COMPANY</p></legend>
                    <Company />
                </fieldset>
            </>
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">FEEDBACK ABOUT OUR SERVICE</p></legend>
                    <InputFieldXL header="FEEDBACK BOX" desc="This isn't part of the job post. If you have any feature requests or general feedback about posting a job Remote OK, leave it here. Please be radically honest, I'm always improving the site and act on your feedback fast. It's most important that you're happy with the site and I want you to keep coming back to post here!" placeholder=""/>
                </fieldset>
            </>
            <>
                <fieldset className="border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">PREVIEW</p></legend>
                    <Preview />
                </fieldset>
            </>
            <>
                <fieldset className="lg:block hidden flex flex-row justify-center items-center border w-full h-max rounded-md lg:mx-6 pb-6 mb-6 mt-5">
                    <legend className="pb-1 m-auto"><p className="mx-1 font-bold text-sm text-gray-700">FROM OUR PARTNERS (OPENS IN NEW WINDOW)</p></legend>
                    <PartnerAd />
                </fieldset>
            </>
            <div className="lg:block hidden">
                <StickyLeft />
            </div>
        </div>
    )
}

export default LeftSide
