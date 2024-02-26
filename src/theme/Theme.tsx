import React, { PropsWithChildren } from 'react';
import './tailwind.css';
import { ConfigProvider } from 'antd';

const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 28,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};

export default Theme;
