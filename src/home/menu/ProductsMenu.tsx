import MenuLink, { MenuTitle } from './MenuLink.tsx';

const ProductsMenu = () => {
  return (
    <div className="flex flex-wrap whitespace-break-spaces">
      <div className="w-1/4 py-6">
        <h4 className="text-2xl font-bold">Products</h4>
        <p className="mt-3">A single platform to accept payments, protect revenue, and control your finances.</p>
      </div>
      <div className="w-1/4 p-6">
        <MenuTitle>Payments</MenuTitle>
        <MenuLink url="/online-payments" title="Online" desc="Accept payments on your website and in-app"/>
        <MenuLink url="/pos-payments" title="In-person payments" desc="Accept payments with terminals and devices"/>
        <MenuLink url="/unified-commerce" title="Unified commerce" desc="Build journeys across sales channels"/>
      </div>
      <div className="w-1/4 p-6">
        <MenuTitle>Enhancements</MenuTitle>
        <MenuLink url="/authentication-3d-secure" title="Authentication" desc="Improve the paying experience with smart authentication"/>
        <MenuLink url="/risk-management" title="Risk management" desc="Detect, prevent, and respond to fraud"/>
        <MenuLink url="/revenue-optimization" title="Revenue optimization" desc="Grow your revenue with the highest authorization rates"/>
        <MenuLink url="/customer-area" title="Insights" desc="Understand customer behavior to drive growth"/>
      </div>
      <div className="w-1/4 p-6">
        <MenuTitle>Financial products</MenuTitle>
        <MenuLink url="/accounts" title="Accounts" desc="Offer business accounts to users on your platform"/>
        <MenuLink url="/capital" title="Capital" desc="Enable fast business financing for your users"/>
        <MenuLink url="/issuing" title="Issuing" desc="Create physical and virtual cards"/>
        <MenuLink url="/payouts" title="Payouts" desc="Send global payouts in real time"/>
      </div>
    </div>
  );
};

export default ProductsMenu;
