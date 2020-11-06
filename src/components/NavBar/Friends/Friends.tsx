import React from 'react';
import style from './Friends.module.css';
import {NavBarDataType} from "../../../redux/state";

type FriendsTypeProps = {
  navBarData: Array<NavBarDataType>
}

const Friends = (props: FriendsTypeProps) => {

  const state =props.navBarData

  const nameOfArrayFriend = state.map(friend => {
    return <div className={style.name} key={friend.id}>{friend.friend}</div>
  })


  return (
    <div>
      <h3 className={style.title}>Friend Lists</h3>
      <div className={style.container}>
        {nameOfArrayFriend}
      </div>
    </div>
  )
}

export default Friends;
