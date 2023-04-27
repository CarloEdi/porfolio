import React from "react"
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"

function Button({buttonText, buttonLink, handleOnClick}) {

    return(
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
        }}
        animate={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: .25,
        }}
        className="button-container">
        <NavLink to={buttonLink}>
            {({isActive}) => (
                <button
                className={isActive ? "subject-button-clicked" : "subject-button"}
                onClick={() => {
                    handleOnClick && handleOnClick()
                }}
                    >{buttonText}</button>
            )}
        </NavLink>
        </motion.div>
    )
}
export default Button