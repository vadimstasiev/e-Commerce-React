import SvgBackground from '../../Components/SvgBackground';
import { LoadingOutlined } from '@ant-design/icons';
import Toggle from '../../Components/ThemeToggle';

const Loading = () => {
    return <SvgBackground>
        <Toggle/>
        <div className="grid  place-items-center pt-40">
            <LoadingOutlined style={{ fontSize: 150 }} className="text-zinc-500 dark:text-zinc-400" spin />
        </div>
    </SvgBackground>;
}

export default Loading