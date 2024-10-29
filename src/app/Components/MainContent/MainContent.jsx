import React from 'react'


const MainContent = ({userImage,userName}) => {
  return (
    <div className='MainContent bg-teal-700 p-4'>
        <div className="user">
            <img src={userImage} alt="user" />
            <h3>Username: {userName}</h3>
        </div>
        <p>Here is your favorite Tracks on Spotify</p>
    </div>
  )
}

export default MainContent;