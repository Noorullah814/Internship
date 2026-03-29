# 🎨 NFT Gallery App

A modern and minimalist NFT Gallery web application built using React.js. This project showcases digital artworks (NFTs) with search, sorting, and detailed view functionality.

---

## 🚀 Features

- 🖼️ Display NFT cards with:
  - Image
  - Name
  - Artist
  - Price

- 🔍 Search Functionality:
  - Search NFTs by name or artist

- 📊 Sorting Options:
  - Price (Low to High)
  - Price (High to Low)
  - Name (A–Z)

- 🪟 NFT Details View:
  - Click on any NFT to open a modal with full details

- 🎨 Modern UI:
  - Responsive design
  - Grid layout using CSS
  - Smooth hover and modal animations

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6)
- CSS3 (Flexbox & Grid)
- HTML5

---

## 📂 Project Structure
src/
│
├── components/
│ ├── NFTCard.jsx
│ ├── NFTModal.jsx
│
├── data/
│ └── NftData.js
│
├── App.jsx
├── index.css


---

## ⚙️ How It Works

1. NFT data is stored in a static JavaScript file.
2. The app filters NFTs based on search input.
3. Sorting is applied dynamically using JavaScript `sort()` method.
4. Clicking on an NFT opens a modal showing detailed information.
5. State is managed using React `useState`.

---

## ▶️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/nft-gallery.git

2. Install dependencies: npm install
3. Run the app: npm run dev

Future Improvements
Add category filtering (Art, Collectible)
Implement routing for separate details page
Connect with real NFT API
Add user authentication
👨‍💻 Author

NoOr Ullah
Frontend Developer (Intern)