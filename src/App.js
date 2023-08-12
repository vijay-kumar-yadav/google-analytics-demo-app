import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import qrCode from "./images/demo-app.png";

const TRACKING_ID = "UA-204451421-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/test-custom-path",
      title: 'demo page',
    });
  }, []);
  return (
    <>
      <div>Demo App G analtics</div>
      <img src={qrCode} alt="qr-code" width="200px" height="200px"/>
    </>
  )
}

export default App