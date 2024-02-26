import React from "react";
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const VideoPay: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100 p-8 flex-1 w-full">
      <span className="font-light mb-4 bg-green-100 rounded inline-block py-1.5 px-2">Payments</span>
      <h2 className="text-3xl font-bold">Get paid everywhere</h2>
      <p className="text-zinc-800 my-6 text-lg font-light">
        Let your customers pay wherever and however they
        prefer. Work with one provider to accept, process, and settle payments.
      </p>
      <div className="flex flex-col gap-8 items-start mt-16">
        <div className="py-4">
          <Button type="link" className="font-medium mb-2 pl-0 group">
            Online payments
            <RightOutlined className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all" />
          </Button>
          <p className="text-zinc-700 font-light">
            Accept payments on your website and in-app
          </p>
        </div>
        <div className="py-4">
          <Button type="link" className="font-medium mb-2 pl-0 group">
            In-person payments
            <RightOutlined className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all" />
          </Button>
          <p className="text-zinc-700 font-light">
            Enhance your point of sale setup and choose a terminal for any need.
          </p>
        </div>
        <div className="py-4">
          <Button type="link" className="font-medium mb-2 pl-0 group">
            Unified Commerce
            <RightOutlined className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all" />
          </Button>
          <p className="text-zinc-700 font-light">
            Connect your online and in-store payment data in one system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPay;
