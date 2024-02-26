import React from 'react';
import Logo from './Logo.tsx';
import { Button, Menu } from 'antd';
import './Header.css';
import ProductsMenu from './menu/ProductsMenu.tsx';
import BusinessMenu from './menu/BusinessMenu.tsx';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import cx from 'classnames';

const Icon: React.FC<{ active: boolean }> = ({ active }) => {
  return <span
    className={active ? "transform rotate-180 transition-all inline-block" : "transition-all inline-block"}><DownOutlined/></span>
}

const Header: React.FC<{ isSmall: boolean }> = ({ isSmall }) => {
  const [menu, setMenu] = React.useState('');
  const [collapsed, setCollapsed] = React.useState(true);
  React.useEffect(() => {
    if (isSmall) {
      setCollapsed(true);
    }
  }, [isSmall]);
  return (
    <header>
      <section className="max-w-7xl mx-auto">
        <div className={cx("flex space-x-6 h-24 items-center", isSmall && 'justify-between')}>
          <Logo/>
          {
            (isSmall && collapsed) &&
            <Button type="link"
                    onClick={() => setCollapsed((c) => !c)}
                    size="large"
                    style={{ marginBottom: 16, color: "#000" }}>
              {isSmall && <MenuOutlined size={24} />}
            </Button>
          }
          {(!isSmall || !collapsed) &&
            <Menu mode={isSmall ? "vertical" : "horizontal"} className={cx(isSmall ? 'w-1/2' : 'flex-1')}
                  triggerSubMenuAction="click"
                  onOpenChange={(e) => setMenu(e[0])}
                  getPopupContainer={() => document.querySelector("#menu-root")!}>
              <Menu.SubMenu
                key="Products"
                title={<div>Products <Icon active={menu === 'Products'}/></div>}
                popupClassName="menu-root"
                className="font-light"
              >
                <Menu.Item className="!h-auto !bg-transparent">
                  <ProductsMenu/>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="Businesses"
                title={<div>Businesses we serve <Icon active={menu === 'Businesses'}/></div>}
                popupClassName="menu-root" className="font-light">
                <Menu.Item className="!h-auto !bg-transparent">
                  <BusinessMenu/>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="About"
                title={<div>About Adyen <Icon active={menu === 'About'}/></div>}
                popupClassName="menu-root" className="font-light">
                <Menu.Item className="!h-auto !bg-transparent">
                  <ProductsMenu/>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="Developers"
                title={<div>Documentation & resources <Icon active={menu === 'Developers'}/></div>}
                popupClassName="menu-root" className="font-light">
                <Menu.Item className="!h-auto !bg-transparent">
                  <BusinessMenu/>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="Pricing"
                title={<div>Pricing <Icon active={menu === 'Pricing'}/></div>}
                popupClassName="menu-root" className="font-light">
                <Menu.Item className="!h-auto !bg-transparent">
                  <ProductsMenu/>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>}
        </div>
      </section>
      <div className="header-portal"></div>
    </header>
  );
};

export default Header;
