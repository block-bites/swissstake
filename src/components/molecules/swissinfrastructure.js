import React from "react";
import Stability from "./stability";

function SwissInfrastructure() {
  return (
    <div className="infrastructure">
      <div className="">
        <h2>Swiss Infrastructure</h2>
        <h4>
          Our server is proudly hosted in Basel, Switzerland, leveraging the
          robust Swiss infrastructure.
        </h4>
      </div>
      <p> This location offers:</p>
      <Stability/>
    </div>
  );
}

export default SwissInfrastructure;
