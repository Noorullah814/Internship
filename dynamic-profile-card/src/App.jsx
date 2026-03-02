import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'
const App = () => {
  const [Users, setUsers] = useState([
    {
      id: 1,
      name: 'Noor Ullah',
      bio: 'Frontend web Developer',
      avatar: './src/assets/profile.jpg',
      isFollowed: false
    },
    {
      id: 2,
      name: 'Hasin',
      bio: 'Video & Content Generation',
      avatar: './src/assets/hasin.jpg',
      isFollowed: false
    },
    {
      id: 3,
      name: 'Usama',
      bio: 'Communication Speaker',
      avatar: './src/assets/usama.jpeg',
      isFollowed: false
    },
      {
      id: 4,
      name: 'M Yar',
      bio: 'ML Engineer',
      avatar: './src/assets/yar.jpeg',
      isFollowed: false
    },
    {
      id: 5,
      name: 'Walliam',
      bio: 'Backend Developer',
      avatar: './src/assets/3.jpg',
      isFollowed: false
    },
      {
      id: 6,
      name: 'Emily',
      bio: 'HR Manager',
      avatar: './src/assets/7.jpg',
      isFollowed: false
    },
      {
      id: 7,
      name: 'Lily',
      bio: 'Software Developer',
      avatar: './src/assets/6.jpg',
      isFollowed: false
    },
      {
      id: 8,
      name: 'Sophia',
      bio: 'Project Manager',
      avatar: './src/assets/22.jpg',
      isFollowed: false
    },
         {
      id: 9,
      name: 'Charlotte',
      bio: 'Graphic Desiner',
      avatar: './src/assets/33.jpg',
      isFollowed: false
    },
         {
      id: 10,
      name: 'Amelia',
      bio: 'Flutter Developer',
      avatar: './src/assets/44.jpg',
      isFollowed: false
    }
  ])

  const [theme, setTheme] = useState(false)

  const handleToggle = (id) => {
    setUsers(
      Users.map(user =>
        user.id === id
          ? { ...user, isFollowed: !user.isFollowed }
          : user
      )
    )
  }


  const [searchText, setSearchText] = useState("")
  const filteredUsers = Users.filter((user) =>
  user.name.toLowerCase().includes(searchText.toLowerCase())
)

  return (
    <div className={theme ? 'app dark' : 'app light'}>

      <header className="header">
      
        <input 
        type="text" 
        placeholder='Type name'
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        />
        <button
          onClick={() => setTheme(!theme)}
          className="theme-btn"
        >
          {theme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* CARDS SECTION */}
      <main className="cards-container">
        {filteredUsers.map(user => (
          <ProfileCard
            key={user.id}
            id={user.id}
            name={user.name}
            bio={user.bio}
            avatar={user.avatar}
            isFollowed={user.isFollowed}
            onToggle={handleToggle}
          />
        ))}
      </main>

    </div>
  )
}

export default App