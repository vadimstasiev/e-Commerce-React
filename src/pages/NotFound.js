import React from 'react'
import { Result, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import SvgBackground from '../Components/SvgBackground';



const NotFound = () => {
    return (
        <SvgBackground>
            <div className="grid  place-items-center pt-40">
                    <Result
                        // style={{horizontal}}
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