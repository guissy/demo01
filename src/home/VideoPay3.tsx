import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const VideoPay3: React.FC = () => {
  return (
    <div className="md:flex md:space-x-10">
      <div className="py-16 bg-gray-100 flex-1 w-full pb-8">
        <span className="font-light mb-4 bg-green-100 rounded inline-block py-1.5 px-2">Finance & operations</span>
        <h2 className="text-3xl font-bold">Take full control of your funds</h2>

        <p className="text-zinc-800 my-6 text-lg font-light">
          Optimize your finances and increase automation with our banking infrastructure. Especially valuable for
          platforms and marketplaces looking to payout users faster in a preferred currency.
        </p>

        <div className="flex flex-col gap-8 items-start mt-16">
          <p className="text-zinc-700 font-semibold text-md">
            Generate your own physical or virtual payment cards to send funds instantly and manage spending.
          </p>
          <div className="py-4">
            <Button type="link" className="font-medium mb-2 pl-0 group">
              Discover Adyen issuing
              <RightOutlined
                className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all"/>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-8">
        <img
          className="w-full md:pt-8 h-auto max-w-[500px] max-h-[500px]"
          src="https://adyen.getbynder.com/transform/2994616c-0b39-4a1f-a208-3badb4d8ac8c/issuing-page-header?io=transform:fill,width:624,height:624&io=transform:crop,width:624,height:624"
          alt="control"/>
      </div>
    </div>
  );
};

export default VideoPay3;
