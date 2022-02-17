import SvgBackground from '../../Components/SvgBackground';
import { LoadingOutlined } from '@ant-design/icons';
import {FixedToggle} from '../../Components/ThemeToggle';
import Background from '../../Components/Background';

const Loading = () => {
    return <Background>
        <SvgBackground>
            <FixedToggle/>
            <div className="grid  place-items-center pt-40">
                <LoadingOutlined style={{ fontSize: 150 }} className="text-zinc-500 dark:text-zinc-400" spin />
            </div>
        </SvgBackground>
    </Background>;
}

export default Loading