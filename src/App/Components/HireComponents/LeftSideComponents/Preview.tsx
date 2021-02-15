import React from 'react'
import prev from 'App/Images/preview.png'

const Preview = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-3">
            <p className="text-center font-medium pb-1">Here's a preview of how your job post will look like</p>
            <p className="text-center">Don't worry if it's not perfect the first time your job is fully editable for free after posting it!</p>
            
            <img src={prev} alt="yo"  className="rounded-xl p-5" />
        </div>
    )
}

export default Preview
