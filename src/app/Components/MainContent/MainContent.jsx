import React from 'react'

const MainContent = ({userImage,userName}) => {
  return (
    <div className='MainContent bg-teal-700 rounded-md p-4 m-4 w-[80%]'>
        <div className="user">
            <img className='w-24 rounded-full' src={userImage} alt="user" />
            <h3 className="font-bold">Username: {userName}</h3>
        </div>
        <p>Here is your favorite Tracks on Spotify</p>
    </div>
  )
}

export default MainContent;