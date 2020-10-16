import React, { useEffect, useRef, useState } from 'react';
import { getRecords } from '../../utils/api';

import Logo from '../Logo/Logo';
import Headline from '../Headline/Headline';

import styles from './ScreenHome.module.scss';

const ScreenHome = ({ setShowPage, setRecords }) => {
  const [loading, setLoading] = useState(true);

  const logo = useRef(null);

  const handleLoaded = nextView => {
    setLoading(false);
    setTimeout(() => {
      setShowPage(nextView);
    }, 300);
  };

  useEffect(() => {
    const logoRef = logo;
    let nextView;

    new Promise((resolve, reject) => {
      getRecords([], resolve, reject);
    })
      .then(response => {
        setRecords(response);
        nextView = 'list';
      })
      .catch(() => {
        nextView = 'error';
      })
      .finally(() => {
        logoRef.current.addEventListener('animationiteration', () => handleLoaded(nextView));
      });

    return function cleanup() {
      logoRef.current.removeEventListener('animationiteration', () => handleLoaded(nextView));
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
