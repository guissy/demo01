import React from 'react';
import AccessCookie from '../layout/AccessCookie.tsx';
import Header from './Header.tsx';
import LogoBar from './LogoBar.tsx';
import OnePlatform from './OnePlatform.tsx';
import { Button } from 'antd';
import { useWindowSize } from 'react-use'

const HomePage: React.FC = () => {
  const { width } = useWindowSize();
  const isSmall = React.useMemo(() => width < 1200, [width]);
  return (
    <div id="home-page">
      <main className="max-w-7xl mx-auto">
        <Header isSmall={isSmall} />
        <div className="flex max-w-7xl mx-auto space-x-40">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-6xl font-bold mb-4">Engineered for ambition</h1>
            <p className="text-lg font-light">End-to-end payments, data, and financial management in a single solution. Meet the
              financial technology platform that helps you realize your ambitions faster.</p>
            <Button type="primary" size="large" className="inline mt-4">Talk to our team</Button>
          </div>
          <div className="w-[520px] h-[629px]">
            <img src="https://via.placeholder.com/520x629" alt="placeholder" className="w-full" />
          </div>
        </div>
        <LogoBar />
        <hr />
        <OnePlatform />
      </main>
      <AccessCookie/>
    </div>
  );
};

export default HomePage;
