import React from 'react'
import {useMenu,useActiveMenu} from "./UseContext"
import Home from './Home'
import  Search  from './Search'
import Abort from './Abort'

const MainContainer = () => {
    const useTheme = useMenu();
    const toggle = useActiveMenu();
    
    return (
        <div className={useTheme?"container-xl dark-mode":"container-xl light-mode"}>
        
        <div className="head">
            <h1 Style={"text-align:center;padding:1rem"}>ITUNES</h1>
            <h4>{}</h4>
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