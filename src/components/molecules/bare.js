import React from "react";

function Bare() {
  return (
    <div className="machine">
      <div className="bareMetal">
        <h3> Bare Metal Machine</h3>
        <p>
          Unlike most validators relying on cloud infrastructure, SwissStake
          operates on a dedicated physical server.
        </p>
        <h4>This approach ensures:</h4>
      </div>

      <div className="independenceBlock">
        <div className="independence">
          <h3>Independence</h3>

          <p>
            We're not tied to any third-party policies, giving us the
            flexibility to adapt and innovate.
          </p>
        </div>
        <div className="control">
          <h3>Control</h3>
          <p>
            Complete control over the hardware means optimal performance and
            security.
          </p>
        </div>
        <div className="reliability">
          <h3>Reliability</h3>
          <p>
            Our bare metal machine minimizes potential downtime and maximizes
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bare;
