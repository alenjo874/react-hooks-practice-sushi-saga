import React from "react";

function MoreButton({onMoreSushi}) {

  function handleMoreSushi() {
    onMoreSushi()
  }

  return <button onClick={handleMoreSushi}>More sushi!</button>;
}

export default MoreButton;
