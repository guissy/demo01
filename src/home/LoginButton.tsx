import React from 'react';
import { Button, ConfigProvider } from 'antd';
import cx from 'classnames';

type Props = {
  className?: string
}
const LoginButton: React.FC<Props> = ({ className }) => {
  return (
    <div className="text-left">
      <ConfigProvider
        theme={{
          token: {
            colorLink: '#333',
          }
        }}>
        <Button type="link" size="large" className={cx('block text-lg', className)}>
          Log in
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default LoginButton;
