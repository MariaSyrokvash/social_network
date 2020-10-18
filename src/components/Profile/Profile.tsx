import React from 'react';
import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from '../../redux/state';

type ProfileTypeProps = {
  postsData: ProfilePageType
  addNewPost: () => void
  trackTextarea: (value: string) => void
}

const Profile = (props: ProfileTypeProps) => {
  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} addNewPost={props.addNewPost} trackTextarea={props.trackTextarea} newPostContent={props.postsData.newPostContent}/>
    </div>
  )
}

export default Profile;