import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export function navigate(to: string) {
  history.push(to);
}

export default history;
