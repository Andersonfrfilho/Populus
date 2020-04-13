import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export { history, useQuery };
