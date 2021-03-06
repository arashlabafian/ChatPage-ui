import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import profile from '../../assets/images/86.jpg';
import Message from '../Message';
import moment from 'moment';

import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([]);
  const myRef = useRef();

  useEffect(() => {
    var tempMessages = [
      {
        id: 1,
        author: 'apple',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime(),
      },
      {
        id: 2,
        author: 'orange',
        message:
          'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime(),
      },
      {
        id: 3,
        author: 'orange',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime(),
      },
      {
        id: 4,
        author: 'apple',
        message:
          'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime(),
      },
      {
        id: 5,
        author: 'apple',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime(),
      },
      {
        id: 6,
        author: 'apple',
        message:
          'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime(),
      },
      {
        id: 7,
        author: 'orange',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime(),
      },
      {
        id: 8,
        author: 'orange',
        message:
          'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime(),
      },
      {
        id: 9,
        author: 'apple',
        message:
          'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime(),
      },
      {
        id: 10,
        author: 'orange',
        message:
          'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime(),
      },
    ];

    setMessages(prevstate => [...prevstate, ...tempMessages]);
    let list = document.getElementsByClassName('scrollable')[0];

    setTimeout(() => {
      list.scrollBy({
        top: 10000,
        behavior: 'smooth',
      });
    }, 0);
  }, []);

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        );
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  };

  return (
    <div className='scrollable content' ref={myRef}>
      <div className='message-list'>
        <Toolbar
          title='Arash'
          rightItems={[
            <NavLink key='info' to='/profile'>
              <ToolbarButton icon='ion-ios-information-circle-outline' />
            </NavLink>,
          ]}
          leftItems={[
            <img
              key='img'
              className='conversation-photo'
              src={profile}
              alt='conversation'
            />,
          ]}
        />

        <div className='message-list-container'>{renderMessages()}</div>

        <Compose setMessages={setMessages} myRef={myRef} />
      </div>
    </div>
  );
}
