import React from 'react'
import { Result } from 'antd';
import { Link } from 'react-router-dom';

import SvgBackground from '../Components/SvgBackground';

import Toggle from '../Components/ThemeToggle';


const NotFound = () => {
    return (
        <SvgBackground>
            <Toggle/>
            <div className="grid  place-items-center pt-40">
                    <Result
                        className='text-slate-900 dark:text-slate-400'
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        // extra={}
                    />
                    <Link to='/'>
                            <button type="button" className="mt-5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 
                                bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
                                focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                                dark:hover:text-white dark:hover:bg-gray-700"
                            >
                               {"Back Home"}
                            </button>
                    </Link>
            </div>
        </SvgBackground>
    )
}

export default NotFound