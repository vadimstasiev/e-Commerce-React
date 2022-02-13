import React from 'react';
import Toggle from '../Components/ThemeToggle'
import { useFirebase } from 'react-redux-firebase'


const Home = () => {
  const firebase = useFirebase()
  return <>
    <Toggle />
    <div className='text-slate-900 dark:text-slate-400'>Home page</div>
    <div className='text-slate-900 dark:text-slate-400 cursor-pointer' onClick={() => firebase.logout()}>Sign Out</div>
  </>
}

export default Home;
