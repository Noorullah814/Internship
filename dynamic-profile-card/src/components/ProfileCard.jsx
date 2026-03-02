import React from 'react'

const ProfileCard = (props) => {
  return (
    
      <div className='card'>
        <img src={props.avatar} alt="profile-pic" class='image'/>
       
        <div><h3>{props.name}</h3>
        <p>{props.bio}</p></div>
        <button onClick={()=>props.onToggle(props.id)} class={props.isFollowed ? 'unfollow' : 'follow'}>{props.isFollowed ? 'Unfollow': 'Follow'}</button>
      </div>
   
  )
}

export default ProfileCard