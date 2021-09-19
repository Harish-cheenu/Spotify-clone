import React,{useContext, useState} from 'react'

// first...Create context...
const Menu = React.createContext()
const changeMenu = React.createContext()
const ActiceMenu = React.createContext();
const SearchValue = React.createContext();
const SongData = React.createContext();
const Playlist = React.createContext();
const PlayPause = React.createContext();
const NewReleases = React.createContext();
const Romance = React.createContext();
const Access = React.createContext();

// fourth Export the context for use
export function useMenu(){
    return useContext(Menu)
}
export function useChange(){
    return useContext(changeMenu) 
}
export function useActiveMenu(){
    return useContext(ActiceMenu)
}
export function useSearchvalue(){
    return useContext(SearchValue)
}
export function useSongData(){
    return useContext(SongData)
}
export function usePlaylist(){
    return useContext(Playlist)
}
export function usePlayPause(){
    return useContext(PlayPause)
}
export function useNewReleases(){
    return useContext(NewReleases)
}
export function useRomance(){
    return useContext(Romance)
}
export function useAccess(){
    return useContext(Access)
}

export function ContextProvider ({children}){

//Second create State     
    const[menu,setmenu]=useState(true);
    const [activeMenu,setActiveMenu]=useState(0);
    const[searchValue,setSearchvalue]=useState(" ");
    const[songData,setsongData]=useState([])
    const[playlist,setPlaylist]=useState([])
    const[playPause,setPlayPause] = useState(0);
    const [newReleases,setNewReleases] = useState([])
    const [romance,setRomance] = useState([])
    const [accessToken,setAccessToken]= useState()
    const changemenu =()=>{
        setmenu(e=>!e)
    }
    // const togglePlay = ()=>{
    //     setPlayPause(e=>!e)
    // }

    return (
//Third create Provider to child with Value of state which done in second step 
        <Menu.Provider value={menu} >
        <Access.Provider value={{a:accessToken,b:setAccessToken}}>
        <changeMenu.Provider value={changemenu}>
        <ActiceMenu.Provider value={{a:activeMenu,b:setActiveMenu}}>
        <SearchValue.Provider value={{a:searchValue,b:setSearchvalue}}>
        <SongData.Provider  value={{a:songData,b:setsongData}}>
        <Playlist.Provider value={{a:playlist,b:setPlaylist}}>
        <PlayPause.Provider value ={{a:playPause,b:setPlayPause}}>
        <NewReleases.Provider value={{a:newReleases,b:setNewReleases}}>
        <Romance.Provider value={{a:romance,b:setRomance}}>
            {children}
        </Romance.Provider>
        </NewReleases.Provider>
        </PlayPause.Provider>
        </Playlist.Provider>
        </SongData.Provider>
        </SearchValue.Provider>
        </ActiceMenu.Provider>
        </changeMenu.Provider>
        </Access.Provider>
        </Menu.Provider>
    )
}

