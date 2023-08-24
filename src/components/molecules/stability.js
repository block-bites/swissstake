import React from "react";
import map from "/static/infrastructureMap.svg";
import lock from "/static/lock.svg";
import trophy from "/static/Trophy.svg";

function Stability() {
  return (
    <div>
      <div>
        <div>
          <h4> Stability</h4>
          <p>
            Benefit from Switzerland's renowned political and economic
            stability.
          </p>
          <img src={map} alt="infrastructureMap" />
        </div>

        <div>
          <div>
            <h3> Privacy</h3>
            <p>
              Enjoy the stringent privacy laws that Switzerland is famous for.
            </p>
            <img src={lock} alt="lockImg" />
          </div>
          <div c>
            <h3> Quality</h3>
            <p>
              Experience top-tier service quality backed by Swiss precision and
              reliability.
            </p>
            <img src={trophy} alt="trophyImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stability;
