
import React, { useEffect, useState } from 'react';
import { ListGists } from '../gistAPI';   
import NewGist from './NewGist'

function GistList() {
    const [gists, setGists] = useState([])

   useEffect(() => {
    ListGists().then((data) => {
        console.log(data)
        const list = data.map((gist) => {
            return <div><a href={gist.html_url}>{gist.description}{NewGist.newTitle}</a></div>
        })
        setGists(list)
    })
   },[])
    return (
       <div className="gistList">
            <button className="listBtn"
                onClick={() => {}}>
                    List Gists
            </button>
            {gists}
        </div>
    )
}

export default GistList
       