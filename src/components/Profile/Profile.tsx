import React from 'react';
import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from '../../redux/store';

type ProfileTypeProps = {
  postsData: ProfilePageType
  dispatch : (action: ActionsType) => void
}

const Profile = (props: ProfileTypeProps) => {
  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;