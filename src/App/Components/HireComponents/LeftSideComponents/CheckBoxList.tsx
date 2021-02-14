import React from 'react'
import CheckBox from 'App/Components/HireComponents/LeftSideComponents/CheckBox'

const CheckBoxList = () => {
    return (
        <div className="mt-5 ml-5">
            <CheckBox placeholder="Show my company logo besides my post" addCost="69" multiplier="2" />
            <CheckBox placeholder="Get Matched with suitable applicants from our network of 5,000+ remote workers" addCost="" multiplier="2" />
            <CheckBox placeholder="Auto renew my job post and bumb it to the front page for 30 days" addCost="" multiplier="2" />
            <CheckBox placeholder="Highlight your post in yellow!" addCost=""  multiplier={"2"} />
        </div>
    )
}

export default CheckBoxList
