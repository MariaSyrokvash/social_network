import React from 'react';
import profileInfo from './ProfileInfo.module.css';
import SocialLink from "./SocialLink/SocialLink";
import Analitics from "./Analitics/Analitics";

const ProfileInfo = () => {
  return (
    <div className={profileInfo.content__wrapper}>
      <img className={profileInfo.content__img} src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg' alt="bg"/>
      <div className={profileInfo.info}>
        <img className={profileInfo.ava__img} src='https://iqonic.design/themes/socialv/html/images/user/11.png'/>
        <p className={profileInfo.name}>Bni Cyst</p>
      </div>

      <div className={profileInfo.social}>
        <SocialLink />
        <Analitics />
      </div>
    </div>
  )
}

export default ProfileInfo;