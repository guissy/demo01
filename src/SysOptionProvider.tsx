import React, { PropsWithChildren } from 'react';

type Option = {
  watermark: number;
};

const defaultValue = {
  option: Object.assign({
    watermark: 12,
  }) as Option,
  setOption: ((opt: Option) => {
    console.warn('opt: ' + opt);
    return { mm_work_order_delete: 'normal' };
  }) as React.Dispatch<React.SetStateAction<Option>>,
};

export const SysOptionContext = React.createContext(defaultValue);

export const useOption = () => {
  return React.useContext(SysOptionContext).option;
};

const SysOptionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [option, setOption] = React.useState(defaultValue.option);
  const value = {
    option,
    setOption,
  };
  return <SysOptionContext.Provider value={value}>{children}</SysOptionContext.Provider>;
};

export default SysOptionProvider;
