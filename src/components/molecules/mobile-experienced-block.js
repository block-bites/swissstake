import React from "react";

import Iconknowledge from "../../assets/Knowladge.svg";
import IconInnovation from "../../assets/Innovation.svg";
import Iconcommitment from "../../assets/Commitment.svg";

function MobileExperiencedBlock() {
  return (
    <div className="mobile-experiencedblocks-positioner">
      <div className="mobile-experienced-header">
        <h2 className="mobile-experienced-header__title">
          Experienced Casper Adopter
        </h2>
        <p className="mobile-experienced-header__subtitle">
          Managed by an individual deeply involved with the Casper ecosystem,
          SwissStake brings unparalleled expertise to the table:
        </p>
      </div>

      <div className="mobile-blocks">
        <div className="mobile-experiencedblocks">
          <img
            src={Iconknowledge}
            alt=""
            className="mobile-experiencedblocks__image1"
          />
          <h4 className="mobile-experiencedblocks__title">Knowledge</h4>
          <p className="mobile-experiencedblocks__text">
            In-depth understanding of the Casper Network's intricacies.
          </p>
        </div>
        <div className="mobile-experiencedblocks">
          <img
            src={IconInnovation}
            alt=""
            className="mobile-experiencedblocks__image2"
          />
          <h4 className="mobile-experiencedblocks__title">Innovation</h4>
          <p className="mobile-experiencedblocks__text">
            Constantly staying ahead of the curve with the latest developments
            and best practices
          </p>
        </div>
        <div className="mobile-experiencedblocks">
          <img
            src={Iconcommitment}
            alt=""
            className="mobile-experiencedblocks__image3"
          />
          <h4 className="mobile-experiencedblocks__title">Commitment</h4>
          <p className="mobile-experiencedblocks__text">
            Running since the beginning of the Casper mainnet, reflecting
            dedication and trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileExperiencedBlock;
