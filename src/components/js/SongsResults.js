import React from 'react'
import { usePlaylist,useSearchvalue } from './UseContext';

const SongsResults = ({track}) => {
    const playList = usePlaylist()
    const search = useSearchvalue()
    function handlePlay(){
        playList.b(track)
        search.b("")

    }

    return (
     <div className="song-result" onClick={handlePlay}>
         <div className="song-vertical-card">
            <img className="my-1" src={track.albumUrl.url} style={{height:"64px",width:"64px"}} alt="song" />
            <div className="mx-1">
                <h6 className="--Name">{track.title.slice(0,20)}</h6>
                <h6 className="text-muted">{track.artist}</h6>
            </div>
        </div>

         
    </div>
    )
}
export default SongsResults;