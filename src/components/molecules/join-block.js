import React from "react";

import Tertiarybtn from "../atoms/tertiary-btn";

import Join from "../../assets/Mountainsvg.svg"

function Joinblock() {
  return (
    <div className="joinblock" style={{ backgroundImage: `url(${Join})` }}>
          <div className="joinblock__title">
            <h2>Join SwissStake Today</h2>

          </div>
        
        <div className="joinblock__button">
          <Tertiarybtn />
        </div>

    </div>
  );
}

export default Joinblock;
