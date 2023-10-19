import React from "react";

import Swiss from "../../assets/Swiss-flag.svg";
import Lock from "../../assets/Lock.svg";
import Trophy from "../../assets/Trophy.svg";



function InfrastructureBlock({ title, text, image }) {
  let imgClass = "default";

  if (image === Swiss) {
    imgClass = "image1";
  } else if (image === Lock) {
    imgClass = "image2";
  } else if (image === Trophy) {
    imgClass = "image3";
  }
  return (
    <div className="infrastructure-block">
      <h2 className="infrastructure-block__title">{title}</h2>
      <p className="infrastructure-block__text">{text} </p>
      <img src={image} alt="" className={`infrastructure-block__img ${imgClass}`} />
    </div>
  );
}

export default InfrastructureBlock;
