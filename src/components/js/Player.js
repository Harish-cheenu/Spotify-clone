import React, { useEffect } from 'react'
import { usePlayPause } from './UseContext'
import SpotifyPlayer from "react-spotify-web-playback"
const Player = ({track,token}) => {
    const play = usePlayPause()
// eslint-disable-next-line
    useEffect(()=>{play.b(0)},[track]) 


    if(!token) return null
    if(!track) return null
    return (
        <>
           <SpotifyPlayer
           styles={{
            activeColor: 'red',
            bgColor: '#1cb954',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
           token={token}
          
           showSaveIcon
           play={play.a}
           callback={state=>{
               if(!state.isPlaying) return play.b(0)
           }}
           uris={track.uri? [track.uri] : []}
            autoPlay={true}
           />
        </>
    )
}
export default Player