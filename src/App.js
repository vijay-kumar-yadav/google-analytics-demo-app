import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-204451421-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>Testing...</div>
  )
}

export default App