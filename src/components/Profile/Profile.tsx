import React from 'react';
import profile from './Profile.module.css';
import ProfileInfo, {ProfileType} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


export type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void

}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={profile.profile}>
      <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;