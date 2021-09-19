import React from 'react';
import {useMenu,useChange} from "./UseContext"
import { useActiveMenu } from './UseContext';

const Sidebar = () => {
    
    const setTheme = useChange();
    const useTheme = useMenu();
    const toggle = useActiveMenu();
    const setToggle = useActiveMenu();

    // const handleLogout = () =>{
    //     // const url = 'https://accounts.spotify.com/authorize'                                                                                                                                                                                                                                                                               
    //     // const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')  
    //     // setTimeout(() => spotifyLogoutWindow.close(), 200)
    //     window.location = "/"                                                                                              
        
    // }


    return (
        <div className="sidebar"  Style={useTheme?`background-color: var(--bgMenu--Dark);color : var(--white--text);`:`background-color:var(--bgMenu--Light);color : var(--dark--text);`}>
            <div className="sidebar_logo">
                <h2>Spotify</h2>
            </div> 
            <ul id="active" className="sidebar_items">
                <a className="--home" Style={useTheme?`color: var(--white--text)`:`color: var(--dark--text)`} href="#top"><li className={toggle.a===0?"sidebar_item active":"sidebar_item"} onClick={()=>setToggle.b(0)}>Home</li></a>
                <a className="--search" Style={useTheme?`color: var(--white--text)`:`color: var(--dark--text)`} href="#top"><li className={toggle.a===1?"sidebar_item active":"sidebar_item"} onClick={()=>setToggle.b(1)}>Search</li></a>
                <a className="--abort" Style={useTheme?`color: var(--white--text)`:`color: var(--dark--text)`} href="#top"><li className={toggle.a===2?"sidebar_item active":"sidebar_item"} onClick={()=>setToggle.b(2)}>About</li></a>
            </ul>
            <br/>
            <h3>Dark Mode</h3>    
            <br/>
            <div className="toggle">
                <input type="checkbox" defaultChecked={true} onClick={setTheme} />
            </div> 
            {/* <button className="logout" onClick={handleLogout}>
                <h5>Logout</h5> 
                <IoLogOut   size={28}/>
            </button>      */}

        </div>
    )
}
export default Sidebar;