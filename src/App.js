import React, { useContext } from "react"
import { Context } from "./Context";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import SmallScreenSidebar from "./components/SmallScreenSidebar";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import SkillSet from "./pages/SkillSet";
import {Routes, Route} from "react-router-dom"

function App() {
  const { showSidebar } = useContext(Context)
  return (
    <div className="app-container">
      <Navbar />
    <div className="App">
      { showSidebar && <Sidebar /> }
      { !showSidebar &&<SmallScreenSidebar /> }
      <main className="subject-body">
        <Routes>
          <Route path="/"
          element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/my_work" element={<MyWork />}/>
          <Route path="/skill_set" element={<SkillSet />}/> 
        </Routes>
      </main>
    </div>
    </div>
  );
}

export default App;
