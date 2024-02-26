import React from 'react';
import { theme } from 'antd';
import Icon1 from '../assets/icon1.tsx';
import Icon2 from '../assets/icon2.tsx';
import Icon3 from '../assets/icon3.tsx';

const OnePlatform: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div className="my-16">
      <h2 className="text-3xl w-[785px]">One platform to accept payments, protect revenue, and control your
        finances.</h2>

      <ul className="md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 items-stretch">
        <li className="flex-1 flex flex-col justify-between mt-16">
          <div className="mb-10">
            <div style={{ color: token.colorPrimary }}><Icon1/></div>
            <dt className="text-xl my-4">Expand your business</dt>
            <dd className="font-light">Easily add more payment methods and grow into new markets with local acquiring.
            </dd>
          </div>
          <div className="bg-zinc-100 font-light">
            <img src="https://via.placeholder.com/368x490" alt="placeholder" className="w-auto max-h-[490px] mx-auto"/>
            <a href="/knowledge-hub/lightspeed-case-study" className="block p-6">Learn how Lightspeed’s gross payment volume increased 56% YoY with their adoption of embedded payments.</a>
          </div>
        </li>
        <li className="flex-1 flex flex-col justify-between mt-16">
          <div className="mb-10">
            <div style={{ color: token.colorPrimary }}><Icon2/></div>
            <dt className="text-xl my-4">Connect online and offline</dt>
            <dd className="font-light">Create superior customer experiences using cross-channel insights.</dd>
          </div>
          <div className="bg-zinc-100 font-light">
            <img src="https://via.placeholder.com/368x490" alt="placeholder" className="w-auto max-h-[490px] mx-auto"/>
            <a href="/knowledge-hub/lightspeed-case-study" className="block p-6">Learn how True Alliance, a leading Australian retailer, saved over $1.4m annually with Unified Commerce. </a>
          </div>
        </li>
        <li className="flex-1 flex flex-col justify-between mt-16">
          <div className="mb-10">
            <div style={{ color: token.colorPrimary }}><Icon3/></div>
            <dt className="text-xl my-4">Manage fraud at scale</dt>
            <dd className="font-light">Protect your business by detecting and responding to fraud without impacting real
              transactions.
            </dd>
          </div>
          <div className="bg-zinc-100 font-light">
            <img src="https://via.placeholder.com/368x490" alt="placeholder" className="w-auto max-h-[490px] mx-auto"/>
            <a href="/knowledge-hub/lightspeed-case-study" className="block p-6">Learn how Bolt lowered their transaction costs, reduced fraud, increased authorization rates through network tokens and 3Ds.</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OnePlatform;
