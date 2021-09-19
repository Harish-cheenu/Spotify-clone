import React from 'react'
import {useMenu,useActiveMenu} from "./UseContext"
import Home from './Home'
import  Search  from './Search'
import Abort from './Abort'
import {IoLogOut} from "react-icons/io5"

const MainContainer = () => {
    const useTheme = useMenu();
    const toggle = useActiveMenu();

    const handleLogout = () =>{
        window.location = "/"                                                                                                
    }
    
    return (
        <div className={useTheme?"container-xl dark-mode":"container-xl light-mode"}>
        
        <div className="head">
            <h1 Style={"text-align:center;padding:1rem"}>ITUNES</h1>
            <h4>{}</h4>
        </div>
        <button className="logout" onClick={handleLogout}>
                <h5>Logout</h5> 
                <IoLogOut   size={28}/>
        </button>
        <div className="Main-Container">
            {/* { toggle.a===0? <Home/> : (toggle.a===1? <Search/> : <Abort/>) } */}
           
            {/* { toggle.a===0? <Home/>: toggle.a===1? <Search/> : <Abort/>} */}
          { toggle.a===1? <Search/>: toggle.a===2? <Abort/>:(<Home/>)}
        </div>
        </div>
    )
}
export default MainContainer;