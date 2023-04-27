import React from "react"
import ProjectCard from "../components/ProjectCard"

function MyWork() {
     
    return(
        <div className="my-work-container">
            <ProjectCard 
            image={["Jobify1.png", "Jobify2.png", "Jobify3.png", "Jobify4.png", "Jobify5.png","Jobify6.png", "Jobify7.png", "Jobify8.png", "Jobify9.png"]}
            title="Jobify"
            description="Job Tracking App"
            link="https://mern-jobify-v0j9.onrender.com/"
            />
            <ProjectCard 
            image={["Quizzical-1.png", "Quizzical-2.png", "Quizzical-3.png"]}
            title="Quizzical"
            description="Quiz game"
            link="https://quizzical-game.onrender.com/"
            />
            <ProjectCard 
            image={["PicSome-1.png", "PicSome-2.png", "PicSome-3.png", "PicSome-4.png", "PicSome-5.png", "PicSome-6.png"]}
            title="Pic Some"
            description="Online store"
            link="https://pic-some-online-store.onrender.com"
            />
            <ProjectCard 
            image={["Velocityper-1.png", "Velocityper-2.png", "Velocityper-3.png"]}
            title="Velocityper"
            description="Typing game"
            link="https://velocityper.onrender.com"
            />
            <ProjectCard 
            image={["Calculator-1.png", "Calculator-2.png", "Calculator-3.png"]}
            title="Calulator"
            description="Calculator app"
            link="https://calculator-app-gavl.onrender.com"
            />
        </div>
    )
}
export default MyWork