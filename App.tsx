import { useEffect, useState } from 'react';
import { useGlobalContext } from "./context";
import Log from './components/log';
import Summary from './components/summary';

const BUTTON_TEXT_RUNING = 'Pause Log';
const BUTTON_TEXT_STOPPED = 'Resume Log';
const STOCK_ADDRESS = 'https://join.reckon.com/stock-pricing';
const FREQUENCY = 2000;

function App() {
  const { state, dispatch } = useGlobalContext();
  const [fetching, setFetchinig] = useState(false);

  const getStock = () => {
    fetch(STOCK_ADDRESS)
      .then((res) => res.json())
      .then(data => {
        dispatch({
          type: "FETCH_STOCK_SUCCESS",
          payload: data
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_STOCK_FAIL",
          payload: error
        });
      });
  }

  const triggerLogClick = () => {
    setFetchinig(!fetching);
  };

  useEffect(() => {
    let interval: any;
    if (fetching) {
      interval = setInterval(() => {
        getStock();
      }, FREQUENCY);
    } else {
      clearInterval(interval);
    }
     return () => clearInterval(interval);
  }, [fetching]);

  return (
    <div className='wrapper'>
      <Log list={state.stockSet} triggerLog={triggerLogClick} buttonText={fetching ? BUTTON_TEXT_RUNING : BUTTON_TEXT_STOPPED} />
      <Summary list={state.stockSet} />
    </div>
  );
}

export default App;
