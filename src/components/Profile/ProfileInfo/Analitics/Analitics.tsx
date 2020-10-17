import React from 'react';
import analitics from './Analitics.module.css';

const Analitics = () => {
  return (
    <div className={analitics.wrapper}>
      <div className={analitics.container}>
        <p className={analitics.title}>Posts</p>
        <p className={analitics.text}>690</p>
      </div>
      <div className={analitics.container}>
        <p className={analitics.title}>Followers</p>
        <p className={analitics.text}>206</p>
      </div>
      <div className={analitics.container}>
        <p className={analitics.title}>Following</p>
        <p className={analitics.text}>100</p>
      </div>
    </div>
  )
}

export default Analitics;