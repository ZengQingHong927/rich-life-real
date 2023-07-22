import { ParallaxBanner } from 'react-scroll-parallax';

function Title() {
        return (
                <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-3xl font-bold">歡迎來到豐盛人生</p>
                </div>
        );
}

function Mountain() {
        return (
                <div style={{ height: '890px' }}>
                        <ParallaxBanner
                                layers={[
                                        { children: <Title />, speed: -30, translateY: [0, 30, 'easeInOut'], opacity: [1, 0.2, 'easeInOut'] },
                                        { image: '/img/trees_02.png', speed: 15, translateX: [0, -20, 'easeInOut'] },
                                        { image: '/img/man.png', speed: 2, translateX: [0, -20, 'easeInOut'] },
                                        { image: '/img/monutain_01.png', speed: 5, translateX: [0, 20, 'easeInOut'] },
                                        { image: '/img/trees_01.png', speed: 1, translateX: [0, -20, 'easeInOut'] },
                                        { image: '/img/monutain_02.png', speed: 5, translateX: [0, 10, 'easeInOut'] },
                                        { image: '/img/plants.png', speed: 5, translateX: [0, -10, 'easeInOut'] },
                                ]}
                                className="aspect-[2/1]"
                        />
                </div>
        );
}

export default Mountain;
