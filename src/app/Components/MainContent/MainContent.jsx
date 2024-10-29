import React from 'react'

<<<<<<< HEAD
const MainContent = ({imageUser,userName}) => {
  return (
    <div className='MainContent bg-teal-700 p-4'>
        <div className="user">
            <img src={image} alt="user" />
            <h3>Username: {userName}</h3>
=======
const MainContent = ({userImage,userName}) => {
  return (
    <div className='MainContent bg-teal-700 rounded-md p-4 m-4 w-[80%]'>
        <div className="user">
            <img className='w-24 rounded-full' src={userImage} alt="user" />
            <h3 className="font-bold">Username: {userName}</h3>
>>>>>>> 5bb6a4bc732b2cd6e3cb31be418f87093ea8196d
        </div>
        <p>Here is your favorite Tracks on Spotify</p>
    </div>
  )
}

export default MainContent;