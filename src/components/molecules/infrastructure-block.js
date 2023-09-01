import React from "react";

function InfrastructureBlock({ title, text, image }) {
  return (
    <div className="infrastructure-block">
      <h4 className="infrastructure-block__title">{title}</h4>
      <p className="infrastructure-block__text">{text}</p>

      <img src={image} alt="" className="infrastructure-block__img" />
    </div>
  );
}



export default InfrastructureBlock;
