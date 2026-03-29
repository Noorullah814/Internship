import React from 'react';

const NFTCard = ({ nft, onClick }) => {
  return (
    <div className="nft-card" onClick={onClick}>
      <img src={nft.image} alt={nft.name} />
      <div className="nft-info">
        <h3>{nft.name}</h3>
        <p>by {nft.artist}</p>
        <div className="price">{nft.price} $</div>
      </div>
    </div>
  );
};

export default NFTCard;