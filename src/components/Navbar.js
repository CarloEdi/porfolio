import React, {useContext} from "react";
import { Context } from "../Context";
import { FaAlignLeft, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { toggleSidebar } = useContext(Context)
  return (
    <div className="nav-bar">
      <div className="nav-center">
        <button 
        className="toggle-nav-btn" 
        onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <button className="btn">
          <FaUserCircle />
          Carlos Alvarado
        </button>
      </div>
    </div>
  );
};

export default Navbar;
