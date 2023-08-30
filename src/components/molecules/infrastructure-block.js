import React from "react";

function InfrastructureBlock({title, text, image}) {
  return (
    <div className="infrastrucutre-block">
      <h4 className="infrastrucutre-block__title">{title}</h4>
      <p className="infrastrucutre-block__text">
       {text}
      </p>
      <img src={image} alt="" className="infrastrucutre-block__img"/>
    </div>
  );
}

export default InfrastructureBlock;
