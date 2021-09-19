import React from 'react'
import { useNewReleases } from '../UseContext'

export const NewReleases = () => {
    const releases = useNewReleases()

    return (
        <div>
            <div className="new-releases" Style={"height:11rem"}>
                {releases.a.map((e)=>(
                    <div key={e.uri}>
                    <img className="mx-2" Style={"width:10rem"} src={e.albumUrl.url} alt="hi" />
                    <h6 className="mx-4 my-2">{e.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}
