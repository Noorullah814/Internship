import React from 'react';

const NFTModal = ({ nft, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={nft.image} alt={nft.name} className="modal-image" />
        <div className="modal-info">
          <h2>{nft.name}</h2>
          <p className="artist">by {nft.artist}</p>
          <p className="price">Price: <strong>{nft.price} $</strong></p>
          <p className="description">
            This is a unique digital artwork by {nft.artist}. 
            A masterpiece in the world of NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTModal;