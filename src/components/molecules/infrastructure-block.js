import React from "react";

import Swiss from "../../assets/swiss-flag.svg";
import Lock from "../../assets/lock.svg";
import Star from "../../assets/star.svg";

function InfrastructureBlock({ title, text, image }) {
  let imgClass = "default";

  if (image === Swiss) {
    imgClass = "image1";
  } else if (image === Lock) {
    imgClass = "image2";
  } else if (image === Star) {
    imgClass = "image3";
  }
  return (
    <div className="infrastructure-block">
      <h2 className="infrastructure-block__title">{title}</h2>
      <p className="infrastructure-block__text" dangerouslySetInnerHTML={{ __html: text }}></p>
      <img
        src={image}
        alt=""
        className={`infrastructure-block__img ${imgClass}`}
      />
    </div>
  );
}

export default InfrastructureBlock;
