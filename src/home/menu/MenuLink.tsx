import React, { PropsWithChildren } from 'react';
import { Button, theme } from 'antd';
import './MenuLink.css';

type Props = {
  url: string;
  title: string;
  desc: string;
}
const MenuLink: React.FC<Props> = ({ url, title, desc }) => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div className="mb-4 menu-link p-0">
      <Button type="link" href={url} className="text-left">
        <span className="font-semibold title" style={{ color: token.colorPrimary }}>{title}</span>
        <br/>
        <span className="mt-2 mb-4 inline-block whitespace-break-spaces">{desc}</span>
      </Button>
    </div>
  );
};

export const MenuTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="text-lg font-semibold my-4">{children}</h2>
  );
};


export default MenuLink;
