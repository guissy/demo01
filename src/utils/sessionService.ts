/* eslint-disable */
import cookie from 'js-cookie';
import { setCookieCurrentUser } from '../utils/auth-interceptor';
import type { CurrentUser } from '../type';

export type SessionInfo = {
  accessToken: { value: string };
};

const restoreToken = (): SessionInfo => {
  const sessionInfo = {} as SessionInfo;
  // 请求 me iframe 有一段时间会丢失 __appid__ ，所以再取 access_token
  const access_token_value = cookie.get('__appid__') || cookie.get('access_token');
  if (access_token_value) {
    try {
      sessionInfo.accessToken = {
        value: access_token_value,
      };
    } catch {
      const keys = Object.keys(cookie.get());
      keys.forEach((key) => cookie.remove(key));
    }
  }
  return sessionInfo;
};

export const clearSessionInfo = () => {
  cookie.remove('__appid__'); // me
  cookie.remove('access_token'); // mp
  cookie.remove('ycpermission'); // yc
  setCookieCurrentUser({} as CurrentUser);
  window.sessionStorage.clear();
  // console.trace('clearSessionInfo')
  document.cookie = '';
  const w = document.getElementById('me-mp-frame') as HTMLIFrameElement;
  if (w?.contentWindow) {
    w.contentWindow.postMessage('logout', '*');
  }
  window.localStorage.setItem('syncTab', Date.now().toString());
};

export const getSessionInfo = () => {
  return restoreToken();
};
