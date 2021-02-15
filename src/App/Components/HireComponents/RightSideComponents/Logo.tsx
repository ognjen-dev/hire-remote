import React from 'react'

interface LogoProps{
    img: string
}

const Logo = ({ img }:LogoProps) => {
    return (
        <div>
            <img src={img} alt="" className="w-24"/>
        </div>
    )
}

export default Logo
