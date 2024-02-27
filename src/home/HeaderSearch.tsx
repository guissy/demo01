import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import cx from 'classnames';
import { Button, ConfigProvider } from 'antd';

type Props = {
  className?: string;
  collapsed?: boolean;
}
const HeaderSearch: React.FC<Props> = ({ className, collapsed }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: '#333',
        }
      }}>
      <Button type="link" size="large" className={cx(className, !collapsed && 'pl-0')}>
        <SearchOutlined className={cx("transform origin-left scale-125", !collapsed && "-translate-y-1")}/>
        <span className="text-lg pl-1">{collapsed ? '' : 'Search'}</span>
      </Button>
    </ConfigProvider>
  );
};

export default HeaderSearch;
