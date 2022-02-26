import React, {Children, useRef, useState, useEffect} from 'react'
import useOnScreen from './hooks/useOnScreen'

const OnScreenRender = ({children, callback}) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(isVisible===true){
            setVisible(true)
            if(callback){
                callback()
            }
        }
    }, [isVisible]);
    
    return <div ref={ref}>{visible && children}</div>
}

export default OnScreenRender