import React from 'react'
import { Result, Button, Row, Col } from 'antd';
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
                        extra={<Button type="primary"><Link to='/'>Back Home</Link></Button>}
                    />
            </div>
        </SvgBackground>
    )
}

export default NotFound