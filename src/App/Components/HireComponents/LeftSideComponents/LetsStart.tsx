import React from 'react'
import InputField from 'App/Components/HireComponents/LeftSideComponents/InputField'
import DropDownInput from 'App/Components/HireComponents/LeftSideComponents/DropDownInput'

const LetsStart = () => {
    return (
        <div>
            <InputField header="COMPANY NAME*" placeholder="" desc="Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc." />
            <InputField header="POSITION*" placeholder="" desc={`Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.`} />
            <DropDownInput />
            <InputField header="EXTRA TAGS (COMMA SEPARATED)*" placeholder=" design, customer support, marketing, javascript" desc="Use tags like industry and tech stack, and separate multiple tags by comma. Short words are preferred. The first 3 tags are shown on the site, the other tags aren't but the job will be shown on each tag specific page (like /remote-react-jobs). We also generate tags automatically after you post/edit." />
            <InputField header="JOB IS RESTRICTED TO LOCATION?" placeholder=" Worldwide" desc={`If you'd only like to hire people from a specific location or timezone this remote job is restricted to (e.g. Europe, United States or CET Timezone). If not restricted, please leave it as "Worldwide". The less restricted this is, the more applicants you will get. Keeping it "Worldwide" is highly recommended as you'll have access to a worldwide pool of talent.`} />
        </div>
    )
}

export default LetsStart
