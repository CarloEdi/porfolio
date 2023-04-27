import React from "react"
import {Link} from "react-router-dom"

function Home() {
    return(
        <div className="home-container">
            <img src="./home-page-img.jpeg" />
            <h1>Hi, Im <span>Carlos</span></h1>
            <p>I am a <span>fullstack</span> developer with experience in <span>React</span> who enjoys working on problems and coming up with a solution. Im looking forward to joining a <span>team</span> and <span>learning</span> more in the field.</p>
            <Link to="/contact">
            <button className="get-in-touch-button">Get in touch</button>
            </Link>
        </div>
    )
}
export default Home