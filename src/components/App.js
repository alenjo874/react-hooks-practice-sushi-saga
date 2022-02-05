import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushiArray, setSushiArray] = useState([]);
  const [sushiPage, setSushiPage] = useState(1);
  const [plates, setPlate] = useState([]);
  const [budget, setBudget] = useState(100);

  //fetching and displalying sushi array
  const API = `http://localhost:3001/sushis/?_page=${sushiPage}&_limit=4`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushiArray(data));
  }, [sushiPage]);
  //=================

  //inverse data flow for displaying more sushi
  function onMoreSushi() {
    setSushiPage((prevSushiLimit) => prevSushiLimit + 1);
  }
  //=================

  //to display eaten plates
  function displayEmptyPlate() {
    setPlate((prevPlate) => [...prevPlate, "empty"]);
  }
  //=================
  //change state of budget, going down to sushi comp
  function onSushiBudget(price) {
    setBudget((prevTotal) => prevTotal - price);
    console.log(budget);
  }
  //=================
  return (
    <div className="app">
      <SushiContainer
        sushiArray={sushiArray}
        onMoreSushi={onMoreSushi}
        displayEmptyPlate={displayEmptyPlate}
        onSushiBudget={onSushiBudget}
        budget={budget}
      />
      <Table plates={plates} budget={budget} />
    </div>
  );
}

export default App;
