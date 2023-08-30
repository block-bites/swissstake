import React from "react";
import Stability from "./stability";

function SwissInfrastructure() {
  return (
    <div className="infrastructureSwiss">
      <div className="infrastructureText">
        <h2>Swiss Infrastructure</h2>
        <h4>
          Our server is proudly hosted in Basel, Switzerland, leveraging the
          robust Swiss infrastructure.
        </h4>
        <p> This location offers:</p>
      </div>
      <Stability />
    </div>
  );
}

export default SwissInfrastructure;
