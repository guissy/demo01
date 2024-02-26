import React, { PropsWithChildren, useMemo } from 'react';
import { isEqual } from 'lodash';
import { CurrentUser } from './type';
import { getCookieCurrentUser, setCookieCurrentUser } from './utils/auth-interceptor';

const defaultPrefer = {
  platProjectTab: '' as '#all' | '#my',
};

const defaultValue = {
  currentUser: getCookieCurrentUser(),
  setCurrentUser: (u: CurrentUser | null) => {
    console.warn(`set user ${u}`);
  },
  isAdmin: false,
  prefer: defaultPrefer,
  setPrefer: (u: typeof defaultPrefer) => {
    console.warn(`set prefer ${u}`);
  },
};

export const CurrentUserContext = React.createContext(defaultValue);
const CurrentUserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<CurrentUser | null>(null);
  React.useEffect(() => {
    // 异步+直取cookie，否则Context随机为currentUser:{}
    setCurrentUser(getCookieCurrentUser());
  }, []);
  const [prefer, setPrefer] = React.useState(defaultValue.prefer);

  const value = useMemo(
    () => ({
      // ...defaultValue,
      currentUser,
      setCurrentUser: (user: CurrentUser | null) => {
        setCurrentUser(user);
        setCookieCurrentUser(user);
      },
      get isAdmin() {
        return currentUser?.is_super_admin === 1;
      },
      prefer,
      setPrefer: (now: typeof defaultPrefer) => {
        setPrefer((prev) => {
          const preferOk = { ...prev, ...now };
          if (!isEqual(preferOk, prev)) {
            try {
              window.localStorage.setItem(String(currentUser?.id), JSON.stringify(preferOk));
            } catch (e) {
              console.warn(e);
            }
          }
          return !isEqual(preferOk, prev) ? preferOk : prev;
        });
      },
    }),
    [currentUser, prefer],
  );

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>;
};
export default CurrentUserProvider;
