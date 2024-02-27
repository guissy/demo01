import React from 'react';
import { Button, ConfigProvider, Descriptions, List } from 'antd';
import cx from 'classnames';
import SocialBar from './SocialBar.tsx';

type Props = {
  linkTexts: string[];
}
const ItemWork: React.FC<Props> = ({ linkTexts }) => {
  return (
    <div>
      <List split={false}>
        {linkTexts.map((linkText, index) => (
          <List.Item key={index} className="!p-0">
            <ConfigProvider
              theme={{
                token: {
                  colorLink: '#fff',
                }
              }}>
              <Button type="link" className="pl-0 group font-light" href="/">
                <span className="group-hover:underline">{linkText}</span>
              </Button>
            </ConfigProvider>
          </List.Item>
        ))}
      </List>
    </div>
  )
}

const Footer: React.FC = () => {
  return (
    <div className="pt-24 bg-[var(--dark-color)]">
      <div className="max-w-7xl 2xl:mx-auto xl:mx-auto lg:mx-16 md:mx-8 mx-4">
        <div className="md:flex">
          <Descriptions colon={false} layout="vertical"
                        column={{ md: 2, lg: 4, xl: 4, xxl: 4 }}
                        className={cx(
                          "[&_.ant-descriptions-item-label]:text-white",
                        )}
          >
            <Descriptions.Item label={<span className="font-semibold">About</span>}>
              <ItemWork linkTexts={["Press & media", "Careers", "Investor Relations", "Partner with us"]}/>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="font-semibold">Contact</span>}>
              <ItemWork linkTexts={["Products", "Payments", "Risk management", "Authentication", "Issuing"]}/>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="font-semibold">Pricing</span>}>
              <ItemWork linkTexts={["Resources", "Documentation", "Academy", "Knowledge Hub", "Newsletter"]}/>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="font-semibold">Platform</span>}>
              <ItemWork
                linkTexts={["Infrastructure", "Licenses", "Legal", "Terms & Conditions", "Responsible disclosure policy"]}/>
            </Descriptions.Item>
          </Descriptions>
          <SocialBar />
        </div>
        <hr className="border-gray-700" />
        <div className="pt-7 pb-8 space-x-2">
          <Button type="link" className="text-gray-500 px-0" href="/">
            Privacy
          </Button>
          <span className="text-gray-600">·</span>
          <Button type="link" className="text-gray-500 px-0" href="/">
            Cookies
          </Button>
          <span className="text-gray-600">·</span>
          <Button type="link" className="text-gray-500 px-0" href="/">
            Disclaimer
          </Button>
          <span className="text-gray-600">·</span>
          <span className="text-gray-500">
            © 2024 Adyen
          </span>

          {/*Language switcher*/}
        </div>
      </div>


    </div>
  );
};

export default Footer;
