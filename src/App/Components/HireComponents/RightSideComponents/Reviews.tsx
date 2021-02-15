import React from 'react'
import Review from 'App/Components/HireComponents/RightSideComponents/Review'

const Reviews = () => {
    return (
        <div>
            <Review quote="A great service overall, I loved the support as well." name="John Doe" position="CTO" company="Stripe" />
            <Review quote="We found great and ambitious developers with your help :D" name="Aubrey Graham" position="CEO" company="Blizzard" />
        </div>
    )
}

export default Reviews
