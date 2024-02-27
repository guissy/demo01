import React from 'react';
import AccessCookie from '../layout/AccessCookie.tsx';
import Header from './Header.tsx';
import LogoBar from './LogoBar.tsx';
import OnePlatform from './OnePlatform.tsx';
import { Button, theme } from 'antd';
import { useWindowSize } from 'react-use'
import LogoBar2 from './LogoBar2.tsx';
import VideoPay from './VideoPay.tsx';
import VideoPay2 from './VideoPay2.tsx';
import VideoPay3 from './VideoPay3.tsx';
import Solutions from './Solutions.tsx';
import Footer from './Footer.tsx';
import ConcatUs from './ConcatUs.tsx';

const HomePage: React.FC = () => {
  const { width } = useWindowSize();
  const isSmall = React.useMemo(() => width < 1200, [width]);
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <main id="home-page">
      <Header isSmall={isSmall}/>
      <section className="max-w-7xl mx-4 xl:mx-auto lg:mx-8">
        <div className="md:flex gap-x-8 lg:gap-x-40 md:gap-x-20">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-6xl font-bold mb-4">Engineered for ambition</h1>
            <p className="text-lg font-light">End-to-end payments, data, and financial management in a single solution.
              Meet the
              financial technology platform that helps you realize your ambitions faster.</p>
            <ConcatUs className="mt-4 mb-8" />
          </div>
          <div className="w-full md:w-[520px] md:max-h-[629px]">
            <img src="https://via.placeholder.com/520x629" alt="placeholder" className="w-full"/>
          </div>
        </div>
        <LogoBar/>
        <hr/>
        <OnePlatform/>
      </section>

      <div className="bg-zinc-100">
        <section className="max-w-7xl mx-4 xl:mx-auto lg:mx-8">
          <VideoPay/>
          <hr/>
          <VideoPay2/>
          <hr/>
          <VideoPay3/>
        </section>
      </div>

      <section className="mt-16 max-w-7xl mx-4 xl:mx-auto lg:mx-8">
        <Solutions />
      </section>

      <section className="mt-16 max-w-7xl mx-4 xl:mx-auto lg:mx-8">
        <LogoBar2/>
      </section>

      <div style={{ background: token.colorPrimary }} className="text-center py-16">
        <h1 className="text-3xl text-white">Get started with payments</h1>
        <Button type="primary" size="large" className="inline mt-4 bg-[var(--dark-color)]">Talk to our team</Button>
      </div>
      <AccessCookie/>

      <Footer />
    </main>
  );
};

export default HomePage;
