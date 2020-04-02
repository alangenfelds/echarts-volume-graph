import React from "react";

import { DepthChart } from "./components";

const data = [
  {
    size: 8623.54,
    price: 1000.99
  },
  {
    size: 8623.54,
    price: 980.99
  },
  {
    size: 8623.54,
    price: 830.99
  },
  {
    size: 8623.54,
    price: 815.99
  },
  {
    size: 8623.54,
    price: 800.99
  },
  {
    size: 8623.54,
    price: 780.99
  },
  {
    size: 8623.54,
    price: 740.99
  },
  {
    size: 8623.54,
    price: 600.99
  },
  {
    size: 8623.54,
    price: 540.99
  },
  {
    size: 8623.54,
    price: 500.99
  },
  {
    size: 8623.54,
    price: 440.99
  },
  {
    size: 8623.54,
    price: 310.99
  },
  {
    size: 8623.54,
    price: 200.33
  },
  {
    size: 8623.54,
    price: 155.22
  },
  {
    size: 8623.54,
    price: 55.31
  },
  {
    size: 8623.54,
    price: 33.12
  }
];

class App extends React.Component {
  render() {
    return <DepthChart bidDepth={data} offerDepth={data} />;
  }
}

export default App;
