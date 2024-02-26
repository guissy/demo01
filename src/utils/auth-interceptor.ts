/* eslint-disable */
import { message } from 'antd';
import { getSessionInfo } from './sessionService';
import cookie from 'js-cookie';
import history from './navigation';
import { CurrentUser } from '../type';
import { isEmpty, pick } from 'lodash';

export const publicAPI = [/\/login\//];

export const requestInterceptor = (url: string) => {
  if (publicAPI.some((regex: RegExp) => regex.test(url))) {
    return;
  }
  const auth = getSessionInfo();
  if (auth.accessToken?.value) {
    return auth.accessToken;
  } else {
    // 丢失 token 情况
    if (!window.location.pathname.includes('/login')) {
      history.push(`/login?from=noToken`);
      message.error(`Login status has expired. Please login again`);
    }
  }
};

export const TOKEN_EFFECTIVE_DURATION = 2 * 60 * 60 * 1000; // token 有效时长, ms
export const refreshCookie = (accessToken: { value: string }) => {
  // add the expires
  const expires = new Date(Date.now() + TOKEN_EFFECTIVE_DURATION);
  if (accessToken?.value) {
    cookie.set('__appid__', accessToken?.value, { expires });
    cookie.set('access_token', accessToken?.value, { expires });
  }
};
let currentUser = null as CurrentUser | null;
export const getCookieCurrentUser = (): CurrentUser | null => {
  if (process.env.NODE_ENV === 'development') {
    const u = cookie.get('u');
    if (u && u.length > 0) {
      try {
        const user = (u);
        return JSON.parse(user) as CurrentUser | null;
      } catch (e) {
        console.error(e);
        return null;
      }
    } else {
      return null;
    }
  }
  return currentUser;
};

export const setCookieCurrentUser = (current_user: CurrentUser | null) => {
  const expires = new Date(Date.now() + TOKEN_EFFECTIVE_DURATION);
  if (process.env.NODE_ENV === 'development') {
    if (!isEmpty(current_user)) {
      const pickKeys = ['id', 'is_super_admin', 'name', 'name_cn', 'workspace_id'];
      const user = { ...current_user };
      cookie.set('u', (JSON.stringify(pick(user, pickKeys))), { expires });
    } else {
      cookie.remove('u');
    }
    return;
  }

  currentUser = current_user;
};
