import React from "react";

import Tertiarybtn from "../atoms/tertiary-btn";

function Joinblock() {
  return (
    <div className="joinblock" id="join">
      <div className="joinblock__title">
        <p>Join SwissStake Today</p>
      </div>

      <div className="joinblock__button">
        <Tertiarybtn />
      </div>
    </div>
  );
}

export default Joinblock;
