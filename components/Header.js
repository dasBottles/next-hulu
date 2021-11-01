import Image from 'next/image';
import HeaderItems from './HeaderItems';
import { HomeIcon, LightningBoltIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItems title='HOME' Icon={HomeIcon}/>
                <HeaderItems title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItems title='RANDOM' Icon={QuestionMarkCircleIcon}/>
            </div>
            <Image className='object-contain' src='https://links.papareact.com/ua6' width={175} height={75} />
        </header>
    )
}

export default Header
