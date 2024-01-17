import React from "react";

import Iconknowledge from "../../assets/knowladge.svg";
import IconInnovation from "../../assets/innovation.svg";
import Iconcommitment from "../../assets/commitment.svg";

function MobileExperiencedBlock() {
  return (
    <div className="mobile-experiencedblocks-positioner">
      <div className="mobile-experienced-header">
        <h2 className="mobile-experienced-header__title">
          Experienced Casper Adopter
        </h2>
        <p className="mobile-experienced-header__subtitle">
          Managed by an individual deeply engaged in the Casper ecosystem,
          SwissStake brings unparalleled expertise to the forefront.
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
            <strong>Gain</strong> from our in-depth understanding of the Casper
            Network's intricacies.
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
            <strong>Stay</strong> ahead of the curve with the latest
            developments and best practices.
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
            <strong>Trust</strong> in our results, running since the inception
            of the Casper mainnet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileExperiencedBlock;
