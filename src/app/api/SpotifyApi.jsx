import React from 'react'

const SpotifyApi = () => {

    const getData = async () => {
        let clientID = "67920aa151754b5aa8e4376cb12cb131"
        let url = ""
        try{
            let res = await fetch(url)
            let data = await res.json()
            console.log(data)
        }catch(err){
            console.log("Something went wrong",err)
        }
    }

  return (
    <div className="SpotifyApi">
        <h1>Spotify API</h1>
        <button onClick={() => getData()}>Get Data</button>
    </div>
  )
}

export default SpotifyApi;