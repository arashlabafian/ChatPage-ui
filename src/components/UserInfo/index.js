import React from 'react';

import classes from './UseInfo.module.css';

const UserInfo = ({ label, info }) => {
  return (
    <div className={classes.row}>
      <label className={classes.label}>{label}</label>
      <p className={classes.info}>{info}</p>
      <hr className={classes.hr} />
    </div>
  );
};

export default UserInfo;
