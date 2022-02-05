import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushiArray,
  onMoreSushi,
  displayEmptyPlate,
  onSushiBudget,
  budget,
}) {
  const displaySushi = sushiArray.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        {...sushi}
        displayEmptyPlate={displayEmptyPlate}
        onSushiBudget={onSushiBudget}
        budget={budget}
      />
    );
  });

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
