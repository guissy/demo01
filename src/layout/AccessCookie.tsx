import React, { useCallback, useState } from 'react';

/** @link https://pybit.es/articles/6-cool-things-you-can-do-with-the-functools-module/ */
interface AccessProps {
}

const AccessCookie: React.FC<AccessProps> = () => {
  const [accessLevel, setAccessLevel] = useState<string>('reject');
  const [show, setShow] = useState(false);
  const handleAccessLevelChange = (newAccessLevel: string) => {
    setAccessLevel(newAccessLevel);
  };

  const onClose = useCallback(() => {
    setShow(b => !b)
  }, [])

  return show ? (
    <div className="relative">
      <div className="max-w-[1200px] absolute bottom-0.5 transform left-1/2 -translate-x-1/2 w-screen">
        <div className="box-border-box relative z-1 text-white bg-[#20c19e] bg-padding-box">
          <div
            className="box-border-box relative py-1.5 px-4 md:mx-auto w-full text-sm flex justify-between items-center max-w-7xl;">
            <span>guissy@qq.com</span>
            <button onClick={onClose} className=" mx-4 text-white cursor-pointer">
              Close
            </button>
          </div>
        </div>
        <div className="bg-[#fffffff2]">
          <div className="py-3 mx-auto">
            <div className="max-w-none box-border pt-15 pb-2.5">
              <div className="box-border text-gray-700 font-semibold relative text-center mb-1 text-md">
                We believe your data is your property and support your right to privacy and transparency.
              </div>
              <div className="box-border text-gray-700 text-sm leading-[20.8px] text-center">
                Select a Data Access Level and Duration to choose how we use and share your data.
              </div>
            </div>
            <Radio>
              <RadioButton
                text="Reject All"
                className="bg-gray-600 mr-5 mb-5"
                icon="bg-[#c4c4c4]"
                active={accessLevel === 'reject'}
                onClick={() => handleAccessLevelChange('reject')}
              />
              <RadioButton
                text="Accept Some"
                className="bg-brown-500 mr-5 mb-5"
                icon="bg-[#d5b565]"
                active={accessLevel === 'some'}
                onClick={() => handleAccessLevelChange('some')}
              />
              <RadioButton
                text="Accept All"
                icon="bg-[#9891b1]"
                className="bg-purple-500 mr-5 mb-5"
                active={accessLevel === 'all'}
                onClick={() => handleAccessLevelChange('all')}
              />
              <Select value={accessLevel} onChange={handleAccessLevelChange}/>
            </Radio>
            <p className="box-border mt-4 font-normal text-gray-700 text-sm animate-huFadeIn text-center">
              Highest level of privacy. Data accessed for necessary basic operations only. Data shared with 3rd parties to
              ensure the site is secure and works on your device
            </p>
            <ButtonBlock
              text="Save my preferences"
              className="bg-[#20c19e] text-white px-[60px] py-2.5 block mx-auto mt-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  ) : <></>;
};

interface ButtonBlockProps {
  text: string;
  className: string;
  onClick?: () => void;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ text, className, onClick }) => {
  return (
    <button className={`rounded-full transition ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

interface RadioProps {
  children: React.ReactNode;
}

const Radio: React.FC<RadioProps> = ({ children }) => {
  return <div className="flex justify-center flex-wrap">{children}</div>;
};

interface RadioButtonProps {
  text: string;
  className: string;
  icon: string;
  onClick: () => void;
  active: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ text, icon, onClick, active }) => {
  const classList = active ? 'bg-[#434f58] text-white' : 'bg-white text-[#5e6a74]';

  return (
    <span onClick={onClick}
          className="box-border min-w-auto w-auto whitespace-normal text-left mb-0 font-semibold cursor-pointer leading-[20.8px] mx-2.5 inline-block">
      <span
        className={classList + ' cursor-pointer block relative w-auto transition-all duration-300 tracking-tight p-[5px] touch-manipulation whitespace-nowrap outline-none rounded-full shadow-md font-bold'}>
        <span
          className={'pointer-events-none cursor-pointer transition-all duration-300 inline-block align-middle box-shadow-none w-[26px] h-[26px] rounded-full position-relative border-none ' + icon}>
        </span>
        <span
          className="pointer-events-none inline-block align-middle text-md font-bold text-decoration-none text-transform-uppercase tracking-widest px-2.5 uppercase">{text}</span>
      </span>
    </span>
  );
};

interface SelectProps {
  value: string;
  onChange: (newValue: string) => void;
}

const Select: React.FC<SelectProps> = ({ value, onChange }) => {
  return (
    <div className="relative text-zinc-700 ml-2.5">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none block w-full pl-3 pr-10 py-1.5 text-base border-2 border-[#20c19e] focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-full"
      >
        <option value="1">1 month</option>
        <option value="2">6 months</option>
        <option value="3">12 months</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"/>
        </svg>
      </div>
    </div>
  );
};

export default AccessCookie;
