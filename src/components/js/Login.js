import React from 'react'
import {Container} from "react-bootstrap"

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a4374151297541bf9b90c22c3ed84e17&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-read-playback-position%20user-read-recently-played%20user-modify-playback-state"
const Login = () => {
    return (
    <>
        <Container className="d-flex flex-column justify-content-center align-items-center" Style={'height:100vh'}>
            <h3>Spotify Clone</h3>
            <p>Right now spotify api calls will only work for spotify premium users*</p>
            <p>It is Recommend that you must login with premium user account*</p>
            <p>Or else you can use developer account for trail</p>
            <p> User Name: harishcheenu1234@gmail.com</p>
            <p> password: 00001111</p>
            <a className=" btn-success btn-lg "href={AUTH_URL}>Login With Spotify</a>
            
        </Container>
        
        </>
    )
}
export default Login
