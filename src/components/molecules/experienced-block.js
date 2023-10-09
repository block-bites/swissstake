import React from "react";

import Iconknowledge from "../../assets/Iconknowledge.svg"
import IconInnovation from "../../assets/IconInnovation.svg"
import Iconcommitment from "../../assets/Iconcommitment.svg"

function ExperiencedBlock() {
  return (
    <div className="experiencedblocks-positioner">
      <div className="experienced-header">
        <div className="experienced-header__title">
          <h2 className="experienced-header__subtitle">
            Experienced Casper Adopter
          </h2>
          <p className="experienced-header__text">
            Managed by an individual deeply involved with the Casper ecosystem,
            <br />
            SwissStake brings unparalleled expertise to the table:
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="experiencedblocks">
        <img src={Iconknowledge} alt="" className="experiencedblocks-image" />
          <h4 className="experiencedblocks__title">Knowledge</h4>
          <p className="experiencedblocks__text">
            In-depth understanding of the <br />Casper Network's intricacies.
          </p>
        </div>
        <div className="experiencedblocks">
        <img src={IconInnovation} alt="" className="experiencedblocks-image" />
          <h4 className="experiencedblocks__title">Innovation</h4>
          <p className="experiencedblocks__text">
            Constantly staying ahead of the <br /> curve with the latest
            developments <br /> and best practices
          </p>
        </div>
        <div className="experiencedblocks">
        <img src={Iconcommitment} alt="" className="experiencedblocks-image" />
          <h4 className="experiencedblocks__title">Commitment</h4>
          <p className="experiencedblocks__text">
            Running since the beginning of the <br /> Casper mainnet, reflecting
            <br /> dedication and trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperiencedBlock;
