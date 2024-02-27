import React from 'react';
import Logo from './Logo.tsx';
import { Button } from 'antd';
import './Header.css';
import { MenuOutlined } from '@ant-design/icons';
import cx from 'classnames';
import HeaderMenu from './HeaderMenu.tsx';
import ConcatUs from './ConcatUs.tsx';
import HeaderSearch from './HeaderSearch.tsx';
import LoginButton from './LoginButton.tsx';


const Header: React.FC<{ isSmall: boolean }> = ({ isSmall }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  React.useEffect(() => {
    if (isSmall) {
      setCollapsed(true);
    }
  }, [isSmall]);
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <section className="max-w-7xl mx-auto">
          <div className={cx("flex space-x-6 h-24 items-center justify-between")}>
            <Logo/>
            {
              isSmall
                ? (
                  <>
                    {(collapsed)
                      ?
                      <Button type="link"
                              onClick={() => setCollapsed((c) => !c)}
                              size="large"
                              style={{ marginBottom: 16, color: "#000" }}>
                        {isSmall && <MenuOutlined size={24}/>}
                      </Button>
                      :
                      <></>
                    }
                  </>)
                : (
                  <div className="flex-1 flex items-center">
                    <HeaderMenu isSmall={isSmall}/>
                    <HeaderSearch className="-mr-4" collapsed/>
                    <LoginButton className="mr-4"/>
                    <ConcatUs/>
                  </div>)
            }
          </div>
        </section>
      </header>
      {isSmall && !collapsed && <div className="fixed right-0 top-0 bottom-0 min-w-1/2 bg-white z-50 flex flex-col">
        <div className="px-8">
          <HeaderMenu isSmall={isSmall} className=" w-full" />
        </div>
        <div className="flex-1 pl-4 pt-4 mt-4 bg-zinc-200">
          <HeaderSearch className="" collapsed={false}/>
          <LoginButton className="pl-0 mb-2"/>
          <ConcatUs/>
        </div>
      </div>}
    </>
  );
};

export default Header;
