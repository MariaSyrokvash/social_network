import React from 'react';
import profileInfo from './ProfileInfo.module.css';
import SocialLink from "./SocialLink/SocialLink";
import Analitics from "./Analitics/Analitics";
import Loader from '../../common/Loader/Loader';

export type ProfileInfoType = {
  aboutMe: string
  contacts: ContactsType
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: PhotoType
  userId: number
}

type PhotoType = {
  small: string
  large: string
}

type ContactsType = {
  facebook: string
  github: string
  instagram: string
  mainLink: null
  twitter: string
  vk: string
  website: string
  youtube: null
}


const ProfileInfo = (props: any) => {
  console.log(props)

  if (!props.profile) {
    return <Loader />
  }
  return (
    <div className={profileInfo.content__wrapper}>
      <img className={profileInfo.content__img} src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg' alt="bg"/>
      <div className={profileInfo.info}>
        <img className={profileInfo.ava__img} src={props.profile.photos.small}/>
        <p className={profileInfo.name}>{props.profile.fullName}</p>
      </div>

      <div className={profileInfo.social}>
        <SocialLink />
        <Analitics />
      </div>
    </div>
  )
}

export default ProfileInfo;