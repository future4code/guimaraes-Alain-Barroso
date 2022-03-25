import React, { useState } from 'react';
import styled from 'styled-components'

import Finder from './components/Finder.js'
import Header from './components/Header'
import Profile from './components/Profile'


import data from './data'

import './App.css';

const App= () => {
  
  const [profile, setProfile] = useState (data)
  const [likedProfiles, setLikedProfiles] = useState ()
  const [dislikedProfiles, setDislikedProfiles] = useState ()
  const activeUser = 0

  switch (action) {
    case 'ADD_TO_LIKED_PROFILE':
      break
    case 'ADD_TO_DISLIKED_PROFILE':
    
    default:
      return profile
  }
  
  
  return (
    <div className="App">
      <Header />

      {user[1]} ? (
        <Profile
          key={user[1].id}
          person={profile[1]}
          likedProfiles={likedProfiles}
          modifyChoice={modifyChoice} 
        />

      ): (
        <Finder
          profileImage={profile[activeUser].photo}
          likedProfiles={likedProfiles}

        />

      )
    </div>
  );
}


export default App