import React from "react";

import Iconknowledge from "../../assets/Iconknowledge.svg";
import IconInnovation from "../../assets/IconInnovation.svg";
import Iconcommitment from "../../assets/Iconcommitment.svg";
import ArrowLeft from "../../assets/Arrow-Right.png";
import ArrowRight from "../../assets/Arrow-Left.png";

function MobileExperiencedBlock() {
  const handlePrevClick = () => {};

  const handleNextClick = () => {};

  return (
    <div className="mobile-experiencedblocks-positioner">
      <div className="-mobile-experienced-header">
        <div className="mobile-experienced-header__title">
          <h2 className="mobile-experienced-header__subtitle">
            Experienced Casper Adopter
          </h2>
          <p className="mobile-experienced-header__text">
            Managed by an individual deeply involved with <br />
            the Casper ecosystem, SwissStake brings
            <br /> unparalleled expertise to the table:
          </p>
        </div>
      </div>
      <div className="mobile-blocks">
        <div className="mobile-experiencedblocks">
          <button onClick={handlePrevClick} className="arrow-left">
            <img src={ArrowLeft} alt="Previous" />
          </button>
          <img
            src={Iconknowledge}
            alt=""
            className="experiencedblocks__image1"
          />
          <button onClick={handleNextClick} className="arrow-right">
            <img src={ArrowRight} alt="Next" />
          </button>
          <h4 className="mobile-experiencedblocks__title">Knowledge</h4>
          <p className="mobile-experiencedblocks__text">
            In-depth understanding of the <br />
            Casper Network's intricacies.
          </p>
        </div>
        {/* <div className="mobile-experiencedblocks">
        <img src={IconInnovation} alt="" className="experiencedblocks__image2" />
          <h4 className="mobile-experiencedblocks__title">Innovation</h4>
          <p className="mobile-experiencedblocks__text">
            Constantly staying ahead of the <br /> curve with the latest
            developments <br /> and best practices
          </p>
        </div>
        <div className="mobile-experiencedblocks">
        <img src={Iconcommitment} alt="" className="experiencedblocks__image3" />
          <h4 className="mobile-experiencedblocks__title">Commitment</h4>
          <p className="mobile-experiencedblocks__text">
            Running since the beginning of the <br /> Casper mainnet, reflecting
            <br /> dedication and trust.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default MobileExperiencedBlock;
