import React from 'react'
// import SpotifyWebApi from "spotify-web-api-node"

import { NewReleases } from './Home/NewReleases'
import { Romance } from './Home/Romance'



const Home = () => {
    

   
    return (
        <div>
            {/* {console.log("Home")} */}
            <h4>New Releases</h4>
            <NewReleases/>
            
            <br/>
            <h4>Romance</h4>
            <Romance/>
        </div>
    )
}
export default Home