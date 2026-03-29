import React, { useState } from 'react';
import { nfts } from './data/NftData';
import NFTCard from './components/NFTCard';
import NFTModal from './components/NFTModal';


function App() {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-low");

  const filteredNFTs = nfts
    .filter(nft => 
      nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.artist.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1>NFT Gallery</h1>
        <div className="controls">
          <input 
            type="text" 
            placeholder="Search NFTs or artists..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </nav>

      {/* Gallery */}
      <main className="gallery">
        {filteredNFTs.map(nft => (
          <NFTCard 
            key={nft.id} 
            nft={nft} 
            onClick={() => setSelectedNFT(nft)}
          />
        ))}
      </main>

      {/* Modal */}
      {selectedNFT && (
        <NFTModal 
          nft={selectedNFT} 
          onClose={() => setSelectedNFT(null)} 
        />
      )}

      {/* Footer */}
      <footer className="footer">
        © 2026 NoOr Ullah • Premium NFT Gallery Demo
      </footer>
    </div>
  );
}

export default App;