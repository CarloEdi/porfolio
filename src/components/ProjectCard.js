import React, { useState } from "react"

function ProjectCard({ image, title, description, link }) {
  const [hovered, setHovered] = useState(false)
  const [imageNum, setImageNum] = useState(0)


  const prevArrow = 
  hovered ? 
    <i
      className="material-symbols-outlined span-next"
      onClick={() => imageNum < image.length - 1 && setImageNum(prev => prev + 1)}
    >
      navigate_next
    </i>
   : ""

  const nextArrow = 
  hovered ?
    <i
      className="material-symbols-outlined span-prev"
      onClick={() => imageNum > 0 && setImageNum(prev => prev - 1)}
    >
      navigate_before
    </i>
   : ""
   
  return (
    <div className="project-container">
      <div
        className="new-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image[imageNum]}
          className="project-img"
        />
        {prevArrow}
        {nextArrow}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target='_blank'>
      <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  )
}
export default ProjectCard;
