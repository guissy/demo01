import React from 'react';
import { Button, Tabs } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useWindowSize } from 'react-use'
import { TabsProps } from 'antd/es/tabs';

type Props = { title: string, desc: string, linkText: string, pic: string }

const TabContent: React.FC<Props> = ({
                                       title,
                                       desc,
                                       linkText,
                                       pic
                                     }) => {
  return (
    <section className="md:flex md:space-x-20 lg:space-x-32">
      <div className="flex-1 mt-8 flex items-center justify-center">
        <div>
          <h3 className="text-4xl mb-8">{title}</h3>
          <p className="font-light text-lg">{desc}</p>
          <Button type="link" className="my-10 pl-0 text-lg" href="/knowledge-hub/lightspeed-case-study">
            <span className="inline-block whitespace-break-spaces">{linkText}</span>
            <RightOutlined
              className="transform scale-75 -translate-y-0.5 -translate-x-1 group-hover:translate-x-0 transition-all"/>
          </Button>
        </div>
      </div>
      <div className="flex-1 mt-8 mx-auto md:mx-0 max-w-[576px]">
        <img
          src={pic} alt={title}/>
      </div>
    </section>
  );
}

const Solutions: React.FC = () => {

  const { width } = useWindowSize();
  const [layout, setLayout] = React.useState<'vertical' | 'horizontal'>("vertical");
  React.useEffect(() => {
    function getMatchedBreakpoint(width: number) {
      if (width >= 1200) return '2xl';
      if (width >= 992) return 'xl';
      if (width >= 768) return 'lg';
      if (width >= 576) return 'md';
      return 'sm';
    }
    const matches = window.matchMedia("(min-width: 576px)").matches;
    const breakpoint = getMatchedBreakpoint(matches ? window.innerWidth : 0);
    if (breakpoint !== 'sm' && breakpoint !== 'md') {
      setLayout('horizontal')
    } else {
      setLayout('vertical')
    }
  }, [width]);
  const tabs = [
    {
      label: 'Digital businesses',
      key: '1',
      children: <TabContent
        title="Digital businesses"
        desc="Optimize conversion by offering seamless payments and authentication. Learn where and how to expand your business next, supported by insights. All while managing risk at scale."
        linkText="Seeing payments as an enabler of growth"
        pic="https://adyen.getbynder.com/m/4f199bfd79070d3a/webimage-homepage-square-spotify.jpg"
      />
    },
    {
      label: 'Omnichannel',
      key: '2',
      children: <TabContent
        title="Omnichannel businesses"
        desc="Accelerate your digital transformation. Connect your online and offline payment data in one system. Deliver more flexible buying journeys and build a deeper understanding of your customers’ behaviour."
        linkText="Using payment technology to improve customer experience"
        pic="https://adyen.getbynder.com/m/5d6d75be90dfef76/webimage-homepage-square-joe-and-the-juice.jpg"
      />
    },
    {
      label: 'Platforms & marketplaces',
      key: '3',
      children: <TabContent
        title="Platforms & marketplaces"
        desc="Increase revenue and reduce churn by offering your users an elevated experience. Provide integrated payments and scale globally with one payments system."
        linkText="Check how Lightspeed is integrating payments with Adyen"
        pic="https://adyen.getbynder.com/m/3fb8a3634e9329bd/webimage-lightspeed-case-study.jpg"
      />
    },
  ] as TabsProps['items']
  return (
    <div>
      <h2 className="text-3xl my-6">Solutions built for your business model</h2>
      <p className="font-light md:w-3/5 mb-16">
        Ambition looks different to every business. Learn how Adyen is helping the world’s leading brands realize
        theirs.
      </p>
      {layout === 'horizontal'
        ? <Tabs items={tabs} />
        : <div className="space-y-10">
        {tabs!.map((tab, index) => (
          <div key={index}>
            <div>{tab.label}</div>
            {tab.children}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Solutions;
