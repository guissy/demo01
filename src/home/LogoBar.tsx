import React from 'react';
import './LogoBar.css';

const LogoBar: React.FC = () => {
  return (
    <div className="logo-bar my-8">
      <div className="grid-ul">
        <img src="https://adyen.getbynder.com/transform/5fffa072-7543-403e-b72a-ecad84f6521b/uber-logobar-svg"
             alt="Uber logo" loading="lazy"/>
        <img src="https://adyen.getbynder.com/transform/ac221a96-c360-4659-a806-8e19a327452c/mango-logobar-svg"
             alt="Mango logo" loading="lazy"/>
        <img src="https://adyen.getbynder.com/transform/eb186a93-5321-451e-8a5c-d6ffe98e33bf/ebay-logobar-svg"
             alt="Ebay logo" loading="lazy"/>
        <img src="https://adyen.getbynder.com/transform/ae819fe1-2eb8-43d3-be27-43f379394775/spotify-logobar-svg"
             alt="Spotify logo" loading="lazy"/>
        <img src="https://adyen.getbynder.com/transform/6c4d4322-0043-4652-85fa-e60a629415e2/mcdonalds-logobar-svg"
             alt="McDonalds logo" loading="lazy"/>
        <img src="https://adyen.getbynder.com/transform/1a0de5d0-ad93-405e-8f7e-3b2b206016bb/wix-logobar-svg"
             alt="Wix logo" loading="lazy"/>
      </div>
    </div>
  );
};

export default LogoBar;
