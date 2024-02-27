import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, ConfigProvider } from 'antd';

const SocialBar = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: '#ddd',
        }
      }}>
      <ul
        role="menubar"
        className="flex md:mx-10 my-10 md:my-0"
      >
        <li role="none" className="ds-social-bar__list-item">
          <Button
            type="link"
            href="https://www.facebook.com/AdyenPayments/"
            target="_blank"
            rel="noopener"
          >
            <div className="transform scale-[2.5]">
              <FacebookFilled className="icon"/>
            </div>
          </Button>
        </li>
        <li role="none" className="ds-social-bar__list-item">
          <Button
            type="link"
            href="https://www.linkedin.com/company/adyen"
            target="_blank"
            rel="noopener"
          >
            <div className="transform scale-[2.5]">
              <LinkedinFilled className="icon"/>
            </div>
          </Button>
        </li>
        <li role="none" className="ds-social-bar__list-item">
          <Button
            type="link"
            href="https://twitter.com/Adyen"
            target="_blank"
            rel="noopener"
          >
            <div className="transform scale-[2.5]">
              <TwitterSquareFilled className="icon" />
            </div>
          </Button>
        </li>
      </ul>
    </ConfigProvider>
  );
};

export default SocialBar;
