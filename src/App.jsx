import React, { useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Screen from './components/Screen/Screen';
import ScreenHome from './components/ScreenHome/ScreenHome';
import ScreenList from './components/ScreenList/ScreenList';
import ScreenError from './components/ScreenError/ScreenError';

import './App.scss';

const App = () => {
  const [showPage, setShowPage] = useState('home');
  const [records, setRecords] = useState([]);

  const handleRetry = () => setShowPage('home');

  let DisplayScreen;

  switch (showPage) {
    case 'home':
      DisplayScreen = ScreenHome;
      break;
    case 'list':
      DisplayScreen = ScreenList;
      break;
    default:
      DisplayScreen = ScreenError;
  }

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={showPage}
        timeout={1300}
        classNames="screen-transition"
      >
        <Screen className="screen-transition" full={showPage === 'home'}>
          <DisplayScreen
            setShowPage={setShowPage}
            setRecords={setRecords}
            retry={handleRetry}
          />
        </Screen>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
