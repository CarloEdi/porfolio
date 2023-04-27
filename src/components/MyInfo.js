import React from "react"
import { motion } from "framer-motion"

function MyInfo() {
    return(
        <div 
        className="info-container">
            <motion.img  
            initial={{
                y: -500,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                duration: .25,
            }}
            className="info-pic" src="./guest-icon.jpeg"/>
            <h2 className="info-name">Carlos Alvarado</h2>
            <motion.h3 
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            className="info-field">SOFTWARE DEVELOPER</motion.h3>
            <h3 className="info-description">Fullstack Developer</h3>
            <h3 className="info-description">carlos9voss@gmail.com</h3>
        </div>
    )
}
export default MyInfo