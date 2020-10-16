import React, { useEffect, useRef, useState } from 'react';
import { getRecords } from '../../utils/api';

import Logo from '../Logo/Logo';
import Headline from '../Headline/Headline';

import styles from './ScreenHome.module.scss';

const ScreenHome = ({ setShowPage, setRecords }) => {
  const [loading, setLoading] = useState(true);
  const [nextView, setNextView] = useState('');

  const logo = useRef(null);

  console.log(nextView);

  const handleLoaded = () => {
    setLoading(false);
    setTimeout(() => {
      setShowPage(nextView);
    }, 300);
  };

  useEffect(() => {
    const logoRef = logo;

    new Promise((resolve, reject) => {
      getRecords([], resolve, reject);
    })
      .then(response => {
        setRecords(response);
        setNextView('list');
      })
      .catch((error) => {
        console.log(error);
        setNextView('error');
      })
      .finally(() => {
        logoRef.current.addEventListener('animationiteration', handleLoaded);
      });

    return function cleanup() {
      logoRef.current.removeEventListener('animationiteration', handleLoaded);
    };
  }, []);

  return (
    <>
      <Logo
        animated={loading}
        large
        ref={logo}
      />
      <Headline type="light" className={styles.headline}>Greg's Records</Headline>
    </>
  );
};

export default ScreenHome;
