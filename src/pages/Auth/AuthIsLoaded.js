import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import SvgBackground from '../../Components/SvgBackground';
import { LoadingOutlined } from '@ant-design/icons';


const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <SvgBackground>
            <Toggle/>
            <div className="grid  place-items-center pt-40">
                <LoadingOutlined style={{ fontSize: 150 }} className="text-zinc-500 dark:text-zinc-400" spin />
            </div>
        </SvgBackground>;
    return children
}

export default AuthIsLoaded