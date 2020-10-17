import React from 'react';
import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { MyPostsType } from '../../redux/state';


type ProfileTypeProps = {
  postsData: Array<MyPostsType>
  addNewPost: (message: string) => void
}

const Profile = (props: ProfileTypeProps) => {
  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} addNewPost={props.addNewPost}/>
    </div>
  )
}

export default Profile;