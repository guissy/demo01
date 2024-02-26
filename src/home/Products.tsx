
const Products = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/4 p-6">
        <h4 className="text-2xl font-bold">Products</h4>
        <p className="text-gray-300 text-base mt-3">A single platform to accept payments, protect revenue, and control
          your finances.</p>
      </div>
      <ul className="w-1/4 p-6">
        <li>
          <h5 className="text-xl font-bold">Payments</h5>
        </li>
        <li className="mt-3">
          <a href="https://www.adyen.com/online-payments" className="text-blue-600 font-bold">Online</a>
          <span className="text-gray-300 text-sm">Accept payments on your website and in-app</span>
        </li>
        <li className="mt-3">
          <a href="https://www.adyen.com/pos-payments" className="text-blue-600 font-bold">In-person payments</a>
          <span className="text-gray-300 text-sm">Accept payments with terminals and devices</span>
        </li>
        <li className="mt-3">
          <a href="https://www.adyen.com/unified-commerce" className="text-blue-600 font-bold">Cross channel</a>
          <span className="text-gray-300 text-sm">Build journeys across sales channels</span>
        </li>
      </ul>
      <ul className="w-1/4 p-6">
        <li>
          <h5 className="text-xl font-bold">Financial products</h5>
        </li>
        <li className="mt-3">
          <a href="https://www.adyen.com/accounts" className="text-blue-600 font-bold">Accounts</a>
          <span className="text-gray-300 text-sm">Offer business accounts to users on your platform</span>
        </li>
        <li className="mt-3">
          <a href="https://www.adyen.com/capital" className="text-blue-600 font-bold">Capital</a>
          <span className="text-gray-300 text-sm">Enable fast business financing for your users</span>
        </li>
        <li className="mt-3">
          <a href="https://www.adyen.com/issuing" className="text-blue-600 font-bold">Issuing</a>
          <span className="text-gray-300 text-sm">Create physical and virtual cards</span>
        </li>
        <li className="mt-3">
          <a href="https://www.adyen.com/payouts" className="text-blue-600 font-bold">Payouts</a>
          <span className="text-gray-300 text-sm">Send global payouts in real time</span>
        </li>
      </ul>
    </div>
  );
};

export default Products;
