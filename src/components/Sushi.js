import React, { useState } from "react";

function Sushi({
  created_at,
  id,
  img_url,
  name,
  price,
  displayEmptyPlate,
  onSushiBudget,
  budget,
}) {
  const [emptyPlate, setEmptyPlate] = useState(false);
  console.log(budget);

  function handleEatSushi(e) {
    setEmptyPlate((prevSushi) => !prevSushi);
    displayEmptyPlate();
  }

  function handlePrice(e) {
    onSushiBudget(e.target.id);
  }

  const outOfMoneyDiv = (
    <div className="plate">
      {/* Tell me if this sushi has been eaten! */}
      {emptyPlate ? null : (
        <img src={img_url} alt={`${name} Sushi`} width="100%" id={price} />
      )}
    </div>
  );
  const haveMoneyDiv = (
    <div className="plate" onClick={handleEatSushi}>
      {/* Tell me if this sushi has been eaten! */}
      {emptyPlate ? null : (
        <img
          src={img_url}
          alt={`${name} Sushi`}
          width="100%"
          onClick={handlePrice}
          id={price}
        />
      )}
    </div>
  );

  return (
    <div className="sushi">
      {budget > 0 ? haveMoneyDiv : outOfMoneyDiv}
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
