import React from "react";

import map from "../../assets/infrastructureMap.svg";
import lock from "../../assets/lock.svg";
import trophy from "../../assets//Trophy.svg";

function Stability() {
  return (
    <div className="content">
      <div className="stability">
        <h4> Stability</h4>
        <p>
          Benefit from Switzerland's renowned <br/> political and economic stability.
        </p>
        <img src={map} alt="infrastructureMap" />
      </div>

      <div className="privacy">
        <h4> Privacy</h4>
        <p>Enjoy the stringent privacy laws that<br/> Switzerland is famous for.</p>
        <img src={lock} alt="lockImg" />
      </div>
      <div className="quality">
        <h4> Quality</h4>
        <p>
          Experience top-tier service quality<br/> backed by Swiss precision and<br/>
          reliability.
        </p>
        <img src={trophy} alt="trophyImg" />
      </div>
    </div>
  );
}

export default Stability;
