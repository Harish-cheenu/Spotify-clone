import { useEffect,useState } from 'react'
import { useAccess } from './UseContext'
import axios from "../../../node_modules/axios"

export default function UseAuth ({code}) {
    const accessToken = useAccess()
    // const[accessToken,setAccessToken] = useState()
    const[refreshToken,setRefreshToken] = useState()
    const[expriesIn,setExpriesIn] = useState()

    useEffect(() => {
        axios.post("https://harish-spotify-clone.herokuapp.com/login",{code})
        .then(res=>{
            accessToken.b(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpriesIn(res.data.expriesIn)
            window.history.pushState({},null,"/")
            // console.log(res.data)
        })
        .catch(()=>window.location = "/")
    }, [code])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        if(!refreshToken||!expriesIn) return
        const interval =setInterval(() => {
            axios.post("https://harish-spotify-clone.herokuapp.com/refresh",{refreshToken})
            .then(res=>{
                accessToken.b(res.data.accessToken)
                // setRefreshToken(res.data.refreshToken)
                setExpriesIn(res.data.expriesIn)
                // window.history.pushState({},null,"/")
            })
            .catch(()=>window.location = "/") 
        }, (expriesIn-60)*1000)

        return ()=>clearInterval(interval)
          
    },[refreshToken,expriesIn])// eslint-disable-line react-hooks/exhaustive-deps


return (
    <>
    </>
)
}
