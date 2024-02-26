import React from 'react';
import AccessCookie from '../layout/AccessCookie.tsx';
import Header from './Header.tsx';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen">
      <main className="h-screen">
        <Header />
        <div className="flex max-w-7xl mx-auto space-x-40">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-6xl font-bold mb-4">Engineered for ambition</h1>
            <p className="text-lg font-light">End-to-end payments, data, and financial management in a single solution. Meet the
              financial technology platform that helps you realize your ambitions faster.</p>
          </div>
          <div className="w-[520px] h-[629px]">
            <img src="https://via.placeholder.com/520x629" alt="placeholder" className="w-full" />
          </div>
        </div>
      </main>
      <AccessCookie/>
    </div>
  );
};

export default HomePage;
