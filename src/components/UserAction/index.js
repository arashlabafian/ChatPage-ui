import React from 'react';

import classes from './UserAction.module.css';

const UserAction = ({ title, danger }) => {
  return (
    <div className={classes.row}>
      <div className={`${classes.title} ${danger ? classes.danger : ''}`}>
        {title}
      </div>
      <hr />
    </div>
  );
};

export default UserAction;
