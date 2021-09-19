import React,{useEffect} from 'react'
import { useRomance , useAccess} from '../UseContext'
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
    clientId:"a4374151297541bf9b90c22c3ed84e17"
})


export const Romance = () => {
    const accessToken = useAccess()
    useEffect(() => {
        if(!accessToken.a)return 
        spotifyApi.setAccessToken(accessToken.a)
    }, [accessToken.a])

    useEffect(()=>{
        if(!accessToken.a)return 
        let cancel = false;
        
        spotifyApi.getPlaylistsForCategory("romance",{
            country: 'IN',
            limit : 5,
            offset : 0
          })
        .then((data)=> {
            if(cancel) return
            // console.log(data.body.playlists.items)
            romance.b(data.body.playlists.items.map(track =>{
                return {
                    name: track.name,
                    uri: track.uri,
                    albumUrl: track.images[0].url ,
                }}))
            })
            return ()=> cancel=true   
        }, [accessToken.a])// eslint-disable-line react-hooks/exhaustive-deps

    const romance = useRomance()

    return (
        <div>
            <div className="new-releases" Style={"height:11rem"}>
                {romance.a.map((e)=>(
                    <div key={e.uri}>
                    <img className="mx-2" Style={"width:10rem"} src={e.albumUrl} alt="hi" />
                    <h6 className="mx-4 my-2">{e.name}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}
