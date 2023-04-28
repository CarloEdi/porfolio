import React from "react"
import { SiMongodb, SiExpress } from "react-icons/si"
import { TbBrandRedux } from "react-icons/tb"

function SkillSet() {
    return(
        <div className="skillset-container">
            <h1 className="subject-title">Skill Set</h1>
        <div className="skillset-icons-container">
            <div className="skillset-icon">
                <i className="fa-brands fa-html5 skillset-icon-img"></i>  
                <p>HTML</p>
            </div>
            <div className="skillset-icon">
                <i className="fa-brands fa-css3-alt skillset-icon-img"></i>
                <p>CSS</p>
            </div>
            <div className="skillset-icon">
                <i className="fa-brands fa-js skillset-icon-img"></i>
                <p>Javascript</p>
            </div>
            <div className="skillset-icon">
                <i className="fa-brands fa-react skillset-icon-img"></i>
                <p>React</p>
            </div>
            <div className="skillset-icon">
                <i className="fa-brands skillset-icon-img">
                 <TbBrandRedux className="tb-brand-redux"/>
                </i>
                <p>Redux</p>
            </div>
            <div className="skillset-icon">
                 <i className="fa-brands fa-git-alt skillset-icon-img"></i>
                <p>Git</p>
            </div>
            <div className="skillset-icon">
                 <i className="fa-brands fa-node skillset-icon-img"></i>
                <p>Node</p>
            </div>
            <div className="skillset-icon">
                <i className="fa-brands skillset-icon-img">
                 <SiExpress className="si-express"/>
                </i>
                <p>Express</p>
            </div>
            <div className="skillset-icon">
                <i className="fa-brands skillset-icon-img">
                 <SiMongodb className="si-mongodb"/>
                </i>
                <p>MongoDb</p>
            </div>
            </div>
        </div>
    )
}
export default SkillSet