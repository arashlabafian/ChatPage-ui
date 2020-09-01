import React from 'react';
import MessageList from '../MessageList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from '../Profile';
import './Messenger.css';

export default function Messenger(props) {
  return (
    <Router>
      <Switch>
        <Route path='/profile'>
          <div className='messenger'>
            <div className='scrollable content'>
              <Profile name='Arash' />
            </div>
          </div>
        </Route>
        <Route path='/'>
          <div className='messenger'>
            <MessageList />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
