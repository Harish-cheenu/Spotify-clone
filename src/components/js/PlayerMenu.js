import React from 'react'
import {useMenu,usePlaylist,usePlayPause} from "./UseContext"
import "../css/playerMenu.css"
// import {FaStepForward,FaStepBackward,FaPause,FaPlay,FaVolumeMute,FaVolumeDown,FaVolumeUp} from "react-icons/fa"
// import ReactAudioPlayer from 'react-audio-player';
import Player from ""

import Img from "../../Music_Icon.png"
const PlayerMenu = () => {
    const Theme = useMenu();
    const playlist = usePlaylist();
    const playPause = usePlayPause();

    return (
        <div  className={Theme?"player_Menu dark-mode":"player_Menu light-mode"}>
           {/* song detials */}
           <div className="song_info">
               {playlist.a.albumUrl?<img className="song_info--img" src={playlist.a.albumUrl.url} alt="description"/>:<img className="song_info--img" src={Img} alt="description"/>}
               <div className="song_info--text">
                    <h6 className="song_info--title">{playlist.a.title}</h6>
                    <h6  className="text-muted">{playlist.a.artist}</h6>
               </div>
           </div>
           {/* {playPause.a?play:pause} */}
           <div className="song_control">
            <Player
             src={playlist.a.uri}
             autoPlay
             controls
             play={true}
             />
           </div>
        </div>
    )
}
export default PlayerMenu;