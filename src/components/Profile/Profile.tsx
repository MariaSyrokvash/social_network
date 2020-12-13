import React from 'react';
import profile from './Profile.module.css';
import ProfileInfo, {ProfileInfoType} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


export type ProfilePropsType = {
  profile: ProfileInfoType
  setUserProfile: (profile: ProfileInfoType) => void
}

const Profile = (props: any) => {

  return (
    <div className={profile.profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;