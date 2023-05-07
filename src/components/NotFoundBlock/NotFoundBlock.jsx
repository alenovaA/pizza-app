import React from 'react';
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
        <span>&#9785;</span>
        <br/>
        <span>404</span>
        <h1 className={styles.description}>Page not found</h1>
    </div>
  )
}
export default NotFoundBlock;