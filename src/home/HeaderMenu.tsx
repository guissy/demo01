import React from 'react';
import cx from 'classnames';
import { Menu } from 'antd';
import ProductsMenu from './menu/ProductsMenu.tsx';
import BusinessMenu from './menu/BusinessMenu.tsx';
import { DownOutlined } from '@ant-design/icons';

const Icon: React.FC<{ active: boolean }> = ({ active }) => {
  return <span
    className={active ? "transform rotate-180 transition-all inline-block" : "transition-all inline-block"}><DownOutlined/></span>
}

type Props = {
  isSmall: boolean
  className?: string
}
const HeaderMenu: React.FC<Props> = ({ isSmall, className }) => {
  const [menu, setMenu] = React.useState('');

  return (
    <Menu mode={isSmall ? "vertical" : "horizontal"}
          className={cx(isSmall ? 'w-1/2' : 'flex-1', 'border-b-0', className)}
          triggerSubMenuAction="click"
          onOpenChange={(e) => setMenu(e[0])}
          getPopupContainer={() => document.querySelector("#menu-root")!}>
      <Menu.SubMenu
        key="Products"
        title={<div>Products {!isSmall && <Icon active={menu === 'Products'}/>}</div>}
        popupClassName="menu-root"
        className="font-light"
      >
        <Menu.Item className="!h-auto !bg-transparent">
          <ProductsMenu/>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="Businesses"
        title={<div>Businesses we serve {!isSmall && <Icon active={menu === 'Businesses'}/>}</div>}
        popupClassName="menu-root" className="font-light">
        <Menu.Item className="!h-auto !bg-transparent">
          <BusinessMenu/>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="About"
        title={<div>About Adyen {!isSmall && <Icon active={menu === 'About'}/>}</div>}
        popupClassName="menu-root" className="font-light">
        <Menu.Item className="!h-auto !bg-transparent">
          <ProductsMenu/>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="Developers"
        title={<div>Documentation & resources {!isSmall && <Icon active={menu === 'Developers'}/>}</div>}
        popupClassName="menu-root" className="font-light">
        <Menu.Item className="!h-auto !bg-transparent">
          <BusinessMenu/>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="Pricing"
        title={<div>Pricing {!isSmall && <Icon active={menu === 'Pricing'}/>}</div>}
        popupClassName="menu-root" className="font-light">
        <Menu.Item className="!h-auto !bg-transparent">
          <ProductsMenu/>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default HeaderMenu;
