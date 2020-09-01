import React from 'react';
import { NavLink } from 'react-router-dom';

import Image from '../../assets/images/86.jpg';
import classes from './Profile.module.css';
import ContactRow from '../ContactRow';
import UserInfo from '../UserInfo';
import UserAction from '../UserAction';
import Toolbar from '../Toolbar';

export default function Profile({ name }) {
  return (
    <div className={classes.profile}>
      <Toolbar
        rightItems={[
          <div key={Math.random()} className={classes.edit}>
            Edit
          </div>,
        ]}
        leftItems={[
          <NavLink to='/' key={Math.random()}>
            <ion-icon class={classes.ion} name='chevron-back'></ion-icon>
          </NavLink>,
        ]}
      />
      <img className={classes.avatar} src={Image} alt='Profile' />
      <p className={classes.name}>{name}</p>
      <ContactRow />
      <UserInfo label='home' info='22941200' />
      <UserInfo label='mobile' info='09396355030' />
      <div className={classes.actions}>
        <UserAction className={classes.action} title='Send Message' />
        <UserAction className={classes.action} title='Share Contact' />
        <UserAction className={classes.action} title='Add to Favorite' />
        <UserAction
          className={classes.action}
          title='Add to Emergency Contacts'
          danger
        />
      </div>
    </div>
  );
}
