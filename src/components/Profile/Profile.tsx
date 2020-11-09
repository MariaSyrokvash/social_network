import React from 'react';
import profile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
//
// type ProfileTypeProps = {
//   // postsData: ProfilePageType
//   // dispatch : (action: ActionsType) => void
//   // store: StoreType
// }

const Profile = () => {
  return (
    <div className={profile.profile}>
      <ProfileInfo />
      {/*<MyPostsContainer store={props.store}/>*/}
      <MyPostsContainer />
    </div>
  )
}

export default Profile;