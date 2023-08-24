import React from "react";
import Frame2 from "../../assets/Frame 2.svg";

function Whychoose() {
  return (
    <div>
      <div>
        <h2>Why Choose SwissStake?</h2>
        <p>
          SwissStake is not just another validator; we offer unique advantages
          that set us apart from the crowd. Our commitment to independence,
          quality, and experience makes us the ideal choice for staking on the
          Casper Network.
        </p>
      </div>
      <div>
        <img src={Frame2} alt="casper ecosystem img" />
      </div>
    </div>
  );
}

export default Whychoose;
