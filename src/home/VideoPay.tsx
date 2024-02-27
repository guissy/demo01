import React from "react";
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const VideoPay: React.FC = () => {
  return (
    <div className="md:flex md:space-x-4 lg:space-x-10">
      <video autoPlay loop muted playsInline
             className="py-16 flex-1 h-auto block mx-auto md:max-h-[768px] md:max-w-[576px]"
             poster="https://adyen.getbynder.com/transform/541eba18-8dd8-449d-b50d-e8e9af296a52/checkout-options-screens?io=transform:fill,width:576,height:768&amp;io=transform:crop,width:576,height:768">
        <source
          src="https://adyen.getbynder.com/m/6b8c3ed4ea42677a/original/New-video-AD0106_HomepageHike_PaymentsAnimations_07.mp4"
          type="video/mp4">
        </source>
      </video>
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
              <RightOutlined
                className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all"/>
            </Button>
            <p className="text-zinc-700 font-light">
              Accept payments on your website and in-app
            </p>
          </div>
          <div className="py-4">
            <Button type="link" className="font-medium mb-2 pl-0 group">
              In-person payments
              <RightOutlined
                className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all"/>
            </Button>
            <p className="text-zinc-700 font-light">
              Enhance your point of sale setup and choose a terminal for any need.
            </p>
          </div>
          <div className="py-4">
            <Button type="link" className="font-medium mb-2 pl-0 group">
              Unified Commerce
              <RightOutlined
                className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all"/>
            </Button>
            <p className="text-zinc-700 font-light">
              Connect your online and in-store payment data in one system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPay;
