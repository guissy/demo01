import React, { PropsWithChildren } from 'react';
import './tailwind.css';
import { ConfigProvider } from 'antd';

const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0abf53',
            colorLink: '#0abf53',
          },
          components: {
            Menu: {
              itemHeight: 24,
              itemSelectedColor: 'inherit',
            }
          }
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};

export default Theme;
