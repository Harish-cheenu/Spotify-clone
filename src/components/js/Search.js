import React from 'react'
import { useSearchvalue,useMenu,useSongData } from './UseContext'
import "../css/Search.css"
import  SongsResults  from "../js/SongsResults"

const Search = () => {
    const searchValue = useSearchvalue();
    const Theme = useMenu();
    const result = useSongData()

    const handleSearch=(e)=>{
        if(e===null)return 
        searchValue.b(e);  
    }

    return (
        <div>
            {/* {console.log("Search")} */}
            <form className="search-form">
                <input className="search-input" type="search" id="search-data" value={searchValue.a} onChange={e=>handleSearch(e.target.value)} maxLength="80"  placeholder="Artists, songs, or podcasts" autoFocus/>

            </form>

            <div className="head-card my-2">
                <h2 className="head-title">Songs</h2>
                <a href="#top" className="head-link" Style={Theme?"color:var(--white--text)":"color:var(--dark--text)"}>See all</a>
            </div>
            {(searchValue.a==="")?(
                <h3>Browse all</h3>
            ):(
            <div className="song-results">
                {result.a.map(e=>(
                    <SongsResults  track={e} key={e.uri} />
                ))}
                
            </div>
            )}
        </div>
    )
}
export default Search
