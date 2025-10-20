// src\components\ArtworkCard.js

import React from "react";
import "../styles/ArtworkCard.css";

export default function ArtworkCard({
  mainImage,
  artistImage,
  tag,
  title,
  price,
  count,
}) {
  return (
    <div className="artwork-card">
      <div className="artwork-placeholder">
        <img src={mainImage} alt={title} />
      </div>
      <div className="artwork-info">
        <div className="artwork-top">
          <img className="artist-img" src={artistImage} alt="artist" />
          <div className="artwork-tag">{tag}</div>
        </div>
        <div className="artwork-title subtitle2">{title}</div>
        <div className="artwork-bottom">
          <span className="subtitle2">{price}</span>
          <div className="count-circle">{count}</div>
        </div>
      </div>
    </div>
  );
}
