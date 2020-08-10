import React, { useState, useEffect } from 'react';
import styles from './stylesheets/App.module.scss';
import StartingLogo from './components/StartingLogo'
import MainPage from './components/MainPage'

const App = () => {

  const [logoVisibility, setlogoVisibility] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setlogoVisibility(false)
    }, 4700);
  }, [])



  return (
    <div className={styles.container}>
      {logoVisibility ? <StartingLogo /> : <MainPage />}
    </div>
  );

}

export default App;


