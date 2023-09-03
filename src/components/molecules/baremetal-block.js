import React from "react";

function Baremetalblock() {
  return (
    <div className="baremetal">
      <div className="baremetal-header">
        <h2 className="baremetal-header__title">Bare Metal Machine</h2>
        <p className="baremetal-header__text">
          Unlike most validators relying on cloud infrastructure,
          <br /> SwissStake operates on a dedicated physical server.
        </p>
        <h5>This approach ensures:</h5>
      </div>
      <div className="baremetal-blocks">
        <div>
          <h3 className="baremetal-blocks__title">Independence</h3>
          <p className="baremetal-header__text">
            We're not tied to any third-party policies,
            <br /> giving us the flexibility to adapt and
            <br /> innovate.
          </p>
        </div>
        <div>
          <h3 className="baremetal-blocks__title">Control</h3>
          <p className="baremetal-header__text">
            Complete control over the hardware
            <br /> means optimal performance and
            <br />
            security.
          </p>
        </div>
        <div>
          <h3 className="baremetal-blocks__title">Reliability</h3>
          <p className="baremetal-header__text">
            Our bare metal machine minimizes
            <br /> potential downtime and maximizes
            <br />
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Baremetalblock;
