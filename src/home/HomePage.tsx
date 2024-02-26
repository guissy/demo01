import React from 'react';
import AccessCookie from '../layout/AccessCookie.tsx';
import Header from './Header.tsx';
import LogoBar from './LogoBar.tsx';
import OnePlatform from './OnePlatform.tsx';
import { Button, theme } from 'antd';
import { useWindowSize } from 'react-use'
import LogoBar2 from './LogoBar2.tsx';
import VideoPay from './VideoPay.tsx';

const HomePage: React.FC = () => {
  const { width } = useWindowSize();
  const isSmall = React.useMemo(() => width < 1200, [width]);
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <main id="home-page">
      <section className="max-w-7xl mx-4 xl:mx-auto lg:mx-8">
        <Header isSmall={isSmall}/>
        <div className="md:flex gap-x-8 lg:gap-x-40 md:gap-x-20">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-6xl font-bold mb-4">Engineered for ambition</h1>
            <p className="text-lg font-light">End-to-end payments, data, and financial management in a single solution.
              Meet the
              financial technology platform that helps you realize your ambitions faster.</p>
            <Button type="primary" size="large" className="inline mt-4 mb-8">Talk to our team</Button>
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
        <section className="max-w-7xl mx-4 xl:mx-auto lg:mx-8 md:flex space-x-10">
          <video autoPlay loop muted playsInline
                 className="py-16 flex-1 w-full h-auto md:max-h-[768px] md:w-[576px]"
                 poster="https://adyen.getbynder.com/transform/541eba18-8dd8-449d-b50d-e8e9af296a52/checkout-options-screens?io=transform:fill,width:576,height:768&amp;io=transform:crop,width:576,height:768">
            <source
              src="https://adyen.getbynder.com/m/6b8c3ed4ea42677a/original/New-video-AD0106_HomepageHike_PaymentsAnimations_07.mp4"
              type="video/mp4">
            </source>
          </video>

          <VideoPay />
        </section>
        <hr/>

        <div className="mt-16 text-center max-w-[470px] mx-auto">
          <p className="rounded bg-green-200 inline-block p-1.5 font-light">Data</p>
          <h3 className="text-3xl font-bold mt-6">Make smarter decisions with millions of insights</h3>
          <p className="font-light my-6">Adyen’s unique data ecosystem reveals opportunities where your business can
            grow.</p>
          <p className="font-light my-6">Coupled with our machine learning technology, we help you protect your business
            from fraud, provide customer-friendly authentication, and increase approval rates.</p>
        </div>
        <div className="text-center">
          <img
            className="w-4/5 h-auto mx-auto mb-10"
            src="https://adyen.getbynder.com/transform/b475f990-8488-47e8-aa74-05668d25df7d/dahsboard-homepage-promotional-campaign-risk-offset?io=transform:fill,width:2400,height:1350&io=transform:crop,width:2400,height:1350"
            alt="window"/>
        </div>
      </div>
      <section className="mt-16 max-w-7xl mx-4 xl:mx-auto lg:mx-8">
        <LogoBar2/>
      </section>

      <div style={{ background: token.colorPrimary }} className="text-center py-16">
        <h1 className="text-3xl text-white">Get started with payments</h1>
        <Button type="primary" size="large" className="inline mt-4 bg-[var(--dark-color)]">Talk to our team</Button>
      </div>
      <AccessCookie/>
    </main>
  );
};

export default HomePage;
