import { useEffect } from 'react';
import withRouter from './WithRouter'
import { useNavigate } from 'react-router-dom';

function AutoScrollToTop() {
    const history = useNavigate()

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return null;
}

export default AutoScrollToTop;