import React from 'react'
import InputField from 'App/Components/HireComponents/LeftSideComponents/InputField'
import InputFieldXL from 'App/Components/HireComponents/LeftSideComponents/InputFieldXL'
import CreditCard from 'App/Components/HireComponents/LeftSideComponents/CreditCard'
import PayLater from 'App/Components/HireComponents/LeftSideComponents/PayLater'
const Company = () => {
    return (
        <div>
            <InputField header="COMPANY TWITTER" desc="Twitter username without @. Not required, but used to tag your company when we tweet out your job post." placeholder="&nbsp;username" />
            <div className="mt-4">
            <InputField header="COMPANY EMAIL* (STAYS PRIVATE, FOR INVOICE + EDIT LINK)" desc="Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it!" placeholder="" />
           </div>
            <div className="mt-4">
                <CreditCard />
            </div>
            <div className="mt-4">
                <InputFieldXL header="INVOICE ADDRESS" desc="If you specify your company address here, we'll put it on the Stripe receipt + invoice for your bookkeeping. You can add or edit this later." placeholder="&nbsp;e.g your company's full name and full invoice address, including building, street, city and country; also things like your VAT number, this is shown on the invoice." />
            </div>
            <div className="mt-4">
                <InputField header="INVOICE NOTES / PO NUMBER" desc="Not required. Add notes here that you'd like to see on the invoice/receipt such as a Purchase Order number or any other internal notes you need for reference. You can add or edit this later." placeholder="&nbsp;e.g. PO number 1234" />
            </div>

                <PayLater />

        </div>
    )
}

export default Company
