import { useRef } from 'react';
// import Image from 'next/image';
import { Inter } from 'next/font/google';
import MountainV2 from 'components/MountainV2';
import Intro from 'components/Intro';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
        return (
                <div>
                        <MountainV2 />
                        <Intro />
                </div>
        );
}
