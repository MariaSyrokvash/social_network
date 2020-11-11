import React from 'react';
import profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () => {
  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;