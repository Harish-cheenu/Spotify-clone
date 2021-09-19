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
        
        <div className="d-flex  justify-content-end">
            <button className="logout" onClick={handleLogout}>
                <h5>Logout</h5> 
                <IoLogOut size={28}/>
            </button>
        </div>
        
        <div className="Main-Container">
            {/* { toggle.a===0? <Home/> : (toggle.a===1? <Search/> : <Abort/>) } */}
           
            {/* { toggle.a===0? <Home/>: toggle.a===1? <Search/> : <Abort/>} */}
          { toggle.a===1? <Search/>: toggle.a===2? <Abort/>:(<Home/>)}
        </div>
        </div>
    )
}
export default MainContainer;