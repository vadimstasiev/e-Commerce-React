import React from 'react';
import Toggle from '../Components/ThemeToggle'

const Home = () => {
  return <>
    <Toggle />
    <div className='text-slate-900 dark:text-slate-400'>This is the home page - todo</div>
  </>
}

export default Home;