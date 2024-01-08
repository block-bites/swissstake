import React from "react";

import Iconknowledge from "../../assets/knowladge.svg";
import IconInnovation from "../../assets/innovation.svg";
import Iconcommitment from "../../assets/commitment.svg";


function ExperiencedBlock() {
  return (
    <div className="experiencedblocks-positioner">
      <div className="experienced-header">
        <div>
          <h2 className="experienced-header__title">
            Experienced Casper Adopter
          </h2>
          <p className="experienced-header__subtitle">
            Managed by an individual deeply involved with the Casper ecosystem,
            <br />
            SwissStake brings unparalleled expertise to the table:
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="experiencedblocks">
        <img src={Iconknowledge} alt="" className="experiencedblocks__image1" />
          <h4 className="experiencedblocks__title">Knowledge</h4>
          <p className="experiencedblocks__text">
            In-depth understanding of the Casper Network's intricacies.
          </p>
        </div>
        <div className="experiencedblocks">
        <img src={IconInnovation} alt="" className="experiencedblocks__image2" />
          <h4 className="experiencedblocks__title">Innovation</h4>
          <p className="experiencedblocks__text">
            Constantly staying ahead of the curve with the latest
            developments and best practices
          </p>
        </div>
        <div className="experiencedblocks">
        <img src={Iconcommitment} alt="" className="experiencedblocks__image3" />
          <h4 className="experiencedblocks__title">Commitment</h4>
          <p className="experiencedblocks__text">
            Running since the beginning of the Casper mainnet, reflecting
             dedication and trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperiencedBlock;
