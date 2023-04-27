import React, { useContext } from 'react'
import { Context } from '../Context'
import MyInfo from './MyInfo'
import Button from './Button'
import { FaTimes } from 'react-icons/fa'

const SmallScreenSidebar = () => {
    const { toggleSidebar } = useContext(Context)
  return (
    <div className="small-screen-side-bar">
      <button
      className='close-sidebar-btn'
      onClick={toggleSidebar}>
        <FaTimes />
      </button>  
      <MyInfo />
      <div className="buttons-container">
      <Button 
      buttonText={<span className="material-symbols-rounded home-button">home
      </span>}
      buttonLink="/" 
      handleOnClick={toggleSidebar} />  
      <Button 
      buttonText="CONTACT >"
      buttonLink="/contact"
      handleOnClick={toggleSidebar} />
      <Button 
      buttonText="MY WORK >" 
      buttonLink="/my_work"
      handleOnClick={toggleSidebar} />
      <Button 
      buttonText="SKILL SET >"
      buttonLink="/skill_set"
      handleOnClick={toggleSidebar} />
      </div>
      <div className="social-icons-container">
      <a href='https://www.linkedin.com/in/carlos-alvarado-a844a3259/' target='_blank'>
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a href='https://github.com/CarloEdi' target='_blank'>
        <i className="fa-brands fa-github"></i>
      </a>
      </div>
      </div>
  )
}

export default SmallScreenSidebar