import React from 'react';

const VideoPay2: React.FC = () => {
  return (
      <div>
        <div className="mt-16 text-center max-w-[470px] mx-auto">
          <p className="rounded bg-green-200 inline-block p-1.5 font-light">Data</p>
          <h3 className="text-3xl font-bold mt-6">Make smarter decisions with millions of insights</h3>
          <p className="font-light my-6">Adyen’s unique data ecosystem reveals opportunities where your business can
            grow.</p>
          <p className="font-light my-6">Coupled with our machine learning technology, we help you protect your
            business
            from fraud, provide customer-friendly authentication, and increase approval rates.</p>
        </div>

        <div className="text-center">
          <img
            className="w-4/5 h-auto mx-auto mb-10"
            src="https://adyen.getbynder.com/transform/b475f990-8488-47e8-aa74-05668d25df7d/dahsboard-homepage-promotional-campaign-risk-offset?io=transform:fill,width:2400,height:1350&io=transform:crop,width:2400,height:1350"
            alt="window"/>
        </div>
      </div>
  );
};

export default VideoPay2;
