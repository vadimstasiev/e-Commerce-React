import React from 'react';
import Toggle from '../Components/ThemeToggle'
import { logout } from '../firebase';

const Home = () => {
  return <>
    <Toggle />
    <div className='text-slate-900 dark:text-slate-400'>Home page</div>
    <div className='text-slate-900 dark:text-slate-400 cursor-pointer' onClick={() => logout()}>Sign Out</div>
  </>
}

export default Home;
