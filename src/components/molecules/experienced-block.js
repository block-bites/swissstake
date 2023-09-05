import React from "react";

import Tertiarybtn from "../atoms/tertiary-btn";

function ExperiencedBlock() {
  return (
    <div className="experiencedblocks">
      <div className="experiencedblocks__text">
        <h4 className="experiencedblocks__text--title">Knowledge</h4>
        <p className="experiencedblocks__text--text">
          In-depth understanding of the Casper <br /> Network's intricacies.
        </p>
      </div>
      <div className="experiencedblocks__text">
        <h4 className="experiencedblocks__text--title">Innovation</h4>
        <p className="experiencedblocks__text--text">
          Constantly staying ahead of the <br /> curve with the latest
          developments <br /> and best practices
        </p>
      </div>
      <div className="experiencedblocks__text">
        <h4 className="experiencedblocks__text--title">Commitment</h4>
        <p className="experiencedblocks__text--text">
          Running since the beginning of <br /> the Casper mainnet, reflecting
          <br /> dedication and trust.
        </p>
      </div>
      <div className="experiencedblocks__join">
        <div className="experiencedblocks__join--title">
          <h2> Join SwissStake Today</h2>
        </div>
        <div className="experiencedblocks__join--button">
          <Tertiarybtn />
        </div>
      </div>
    </div>
  );
}

export default ExperiencedBlock;
