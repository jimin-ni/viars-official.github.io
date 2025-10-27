// src/components/ArtworkCard.js
import React from "react";
import "../styles/ArtworkCard.css";

export default function ArtworkCard({
  mainImage,
  artistImage,
  artistName,
  tag,
  title,
  price,
  count,
}) {
  return (
    <div className="artwork-card">
      <img className="artwork-main" src={mainImage} alt={title} />

      <div className="artist-info">
        <div className="artist-left">
          <img className="artist-img" src={artistImage} alt={artistName} />
          <span className="artist-name">{artistName}</span>
        </div>
        <span className="art-tag">{tag}</span>
      </div>

      <div className="artwork-details">
        <div className="artwork-title">{title}</div>
        <div className="artwork-price">{price}</div>
        <div className="artwork-count">{count}</div>
      </div>
    </div>
  );
}
