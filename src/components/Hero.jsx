import React from 'react'
import heroImage from '../images/tailorhero.jpg'

const Hero = () => {
    return (
        <div className="hero-image">
            {/* <div className="hero-image"> */}
                <img src={heroImage} />
                <div className="hero-text">
                    <h1>Welcome to MyTailor</h1>
                    <p>Welcome to your Personal Mobile Tailor.</p>
                    <button>Create your Shirt</button>
                </div>
        </div>
       
    )
}

export default Hero
