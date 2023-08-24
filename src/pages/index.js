import React from "react";
import Intro from "../components/organisms/intro";
import Infrastructure from "../components/organisms/infrastructure";
import Join from "../components/molecules/join";
import Metal from "../components/organisms/metal";

function index() {
  return (
    <div>
      <Intro />
      <Metal />
      <Infrastructure />

      <div>
        <h2>Experienced Casper Adopter</h2>
        <p>
          Managed by an individual deeply involved with the Casper ecosystem,
          SwissStake brings unparalleled expertise to the table:
        </p>
      </div>
      <p>
        Knowledge: In-depth understanding of the Casper Network's intricacies.
        Commitment: Running since the beginning of the Casper mainnet,
        reflecting dedication and trust. Innovation: Constantly staying ahead of
        the curve with the latest developments and best practices.
      </p>
      <Join />
    </div>
  );
}

export default index;
