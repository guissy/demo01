import React from 'react';
import Logo from './Logo.tsx';
import { Menu } from 'antd';
import Products from './Products.tsx';

const Header: React.FC = () => {
  return (
    <header>
      <section className="max-w-7xl mx-auto">
        <div className="flex space-x-6 h-24 items-center">
          <Logo/>
          <Menu mode="horizontal" className="flex-1" triggerSubMenuAction="click">
            <Menu.SubMenu title="Products">
              <Menu.Item className="!h-auto !bg-transparent">
                <Products />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Businesses we serve">

            </Menu.SubMenu>
            <Menu.SubMenu title="About">

            </Menu.SubMenu>
            <Menu.SubMenu title="Documentation & resources">

            </Menu.SubMenu>
            <Menu.SubMenu title="Pricing">

            </Menu.SubMenu>
          </Menu>
        </div>
      </section>
      <div className="header-portal"></div>
    </header>
  );
};

export default Header;
