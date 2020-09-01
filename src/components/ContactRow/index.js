import React from 'react';
import classes from './ContactRow.module.css';

const ContactRow = () => {
  //using web components
  return (
    <div className={classes.contact}>
      <div className={classes.iconBox}>
        <ion-icon class={classes.ion} name='navigate' />
        <label className={classes.title}> message</label>
      </div>
      <div className={classes.iconBox}>
        <ion-icon class={classes.ion} name='call' />
        <label className={classes.title}> mobile</label>
      </div>
      <div className={classes.iconBox}>
        <ion-icon class={classes.ion} name='videocam' />
        <label className={classes.title}> video</label>
      </div>
      <div className={classes.iconBox}>
        <ion-icon class={classes.ion} name='mail' />
        <label className={classes.title}> mail</label>
      </div>
    </div>
  );
};

export default ContactRow;
