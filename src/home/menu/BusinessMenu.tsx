import MenuLink, { MenuTitle } from './MenuLink.tsx';

const BusinessMenu = () => {
  return (
    <div className="flex flex-wrap whitespace-break-spaces">
      <div className="w-1/4 py-6">
        <h4 className="text-2xl font-bold">Businesses we serve</h4>
        <p className="mt-3">Explore how our platform can unlock growth for your business
          type.</p>
      </div>
      <div className="w-1/4 p-6">
        <MenuTitle>Types</MenuTitle>
        <MenuLink url="/digital-businesses" title="Digital businesses" desc="Software, social, gaming, digital media"/>
        <MenuLink url="/mobility" title="Mobility" desc="Transportation of goods and people"/>
        <MenuLink url="/retail" title="Retail" desc="Jewelry, apparel, arts, cosmetics, electronics, homeware, grocery"/>
        <MenuLink url="/platforms-marketplaces" title="Platforms & Marketplaces" desc="Connecting buyers and sellers online"/>
      </div>
      <div className="w-1/4 p-6">
        <MenuTitle>Types</MenuTitle>
        <MenuLink url="/food-beverage" title="Food & beverage" desc="Quick service restaurants, restaurant chains, bars"/>
        <MenuLink url="/hospitality" title="Hospitality" desc="Hotels, spas, venues, leisure parks, fitness"/>
        <MenuLink url="/subscription" title="Subscription" desc="Streaming, subscription boxes, memberships"/>
      </div>
      <div className="w-1/4 p-6">
        <MenuTitle>Resources</MenuTitle>
        <MenuLink url="/customers" title="Customers" desc="See which leading brands are using our products"/>
        <MenuLink url="/case-studies" title="Case studies" desc="Find out how businesses have grown with Adyen"/>
      </div>
    </div>
  );
};

export default BusinessMenu;
