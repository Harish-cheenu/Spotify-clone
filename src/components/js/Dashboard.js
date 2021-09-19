import React ,{useEffect} from 'react'
import { useSearchvalue,useSongData,usePlaylist, useNewReleases,useAccess} from './UseContext'
import UseAuth from './UseAuth'
import MainContainer from './MainContainer'
import Player from './Player'
import Sidebar from "./sidebar"

import SpotifyWebApi from "spotify-web-api-node"
import "../css/playerMenu.css"

const spotifyApi = new SpotifyWebApi({
    clientId:"a4374151297541bf9b90c22c3ed84e17"
})


const Dashboard = ({code}) => {
    const accessToken = useAccess()
    const search = useSearchvalue()
    const songData = useSongData()
    const playList = usePlaylist()
    const newReleases = useNewReleases()

    useEffect(() => {
        if(!accessToken.a)return 
        spotifyApi.setAccessToken(accessToken.a)
    }, [accessToken.a])

    useEffect(() => {
        if(!accessToken.a)return 
        if(!search.a)return search.b("")
        
        let cancel = false;
        spotifyApi.searchTracks(search.a).then(res=>{
            if(cancel) return
            songData.b(res.body.tracks.items.map(track =>{
            const smallImage = track.album.images.reduce(
                (s,img)=>{
                    if(img.height<s.height)return img
                    return s
                },track.album.images[0]
            )
                return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallImage,
            }}))
        })
        return ()=> cancel=true   
    }, [search.a,accessToken.a]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        if(!accessToken.a)return 
        let cancel = false;
        
        spotifyApi.getNewReleases({ limit : 5, offset: 0, locale:"ta_IN" })
        .then((data)=> {
            if(cancel) return
            // console.log(data.body.albums.items)
            newReleases.b(data.body.albums.items.map(track =>{
                const smallImage = track.images.reduce(
                    (s,img)=>{
                        if(img.height>s.height)return img
                        return s
                    },track.images[0]
                )
                    return {
                    artist: track.artists[0].name,
                    title: track.name.slice(0,20),
                    uri: track.uri,
                    albumUrl: smallImage,
                }}))
            })
            return ()=> cancel=true   
        }, [accessToken.a])// eslint-disable-line react-hooks/exhaustive-deps
    
        useEffect(()=>{
            if(!accessToken.a)return 
            let cancel = false;
            spotifyApi.getMyRecentlyPlayedTracks({
                limit : 1
            }).then((data)=> {
                if(cancel) return
                // Output items
                console.log("Your recently played track");
                data.body.items.map(item =>
                    playList.b(item.track) 
                    );

                })
                .catch((err)=> {
                console.log('Something went wrong!', err);
            });
            spotifyApi.getMyCurrentPlaybackState()
            .then((data)=>{
                // Output items
                if (data.body && data.body.is_playing) {
                console.log("User is currently playing something!");
                } else {
                console.log("User is not playing anything, or doing so in private.");
                }
            })
            .catch((err)=> {
                console.log('Something went wrong!', err);
            });
            return ()=> cancel=true 
        },[accessToken.a])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <UseAuth code={code}/>
            {/* {console.log(songData.a)} */}
            <Sidebar/>
            <MainContainer/>
            <Player className="player_Menu"  track={playList.a} token ={accessToken.a}/>
        </div>
    )
}
export default Dashboard