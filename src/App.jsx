import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const mockUsers = [
  { id: 1, name: 'Amina', age: 24, county: 'Nairobi', bio: 'Love hiking and Sheng vibes', distance: 2.5, interests: ['Music', 'Travel'] },
  { id: 2, name: 'Brian', age: 28, county: 'Kiambu', bio: 'Software dev, looking for genuine connection', distance: 5.1, interests: ['Tech', 'Football'] },
  { id: 3, name: 'Faith', age: 22, county: 'Mombasa', bio: 'Beach lover, church on Sundays', distance: 12, interests: ['Faith', 'Cooking'] },
]

function Discover() {
  const [users, setUsers] = useState(mockUsers)
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setLocation({ lat: -1.286389, lng: 36.817223 }) // Nairobi fallback
      )
    }
  }, [])

  const handleSwipe = (id, liked) => {
    setUsers(users.filter(u => u.id !== id))
    if (liked) alert('Liked! (Match logic coming with Supabase)')
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-kenya-green mb-4">Discover Nearby</h1>
      {location && <p className="text-sm text-gray-500 mb-4">Your location: {location.lat.toFixed(2)}, {location.lng.toFixed(2)}</p>}
      {users.map(user => (
        <div key={user.id} className="bg-white rounded-xl shadow p-4 mb-4">
          <div className="h-48 bg-gray-200 rounded-lg mb-2 flex items-center justify-center text-gray-400">Photo</div>
          <h2 className="text-xl font-semibold">{user.name}, {user.age}</h2>
          <p className="text-sm text-gray-600">{user.county} • {user.distance} km away</p>
          <p className="my-2">{user.bio}</p>
          <div className="flex gap-2 mt-3">
            <button onClick={() => handleSwipe(user.id, false)} className="flex-1 bg-red-500 text-white py-2 rounded-full">Pass</button>
            <button onClick={() => handleSwipe(user.id, true)} className="flex-1 bg-green-500 text-white py-2 rounded-full">Like</button>
          </div>
        </div>
      ))}
      {users.length === 0 && <p className="text-center">No more nearby users. Check back later!</p>}
    </div>
  )
}

function Profile() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <p>Set up your profile: photos, bio, county, interests, religion, mode (Student/Professional/Church).</p>
      <button className="mt-4 bg-kenya-green text-white px-4 py-2 rounded">Request Location Permission</button>
    </div>
  )
}

function App() {
  return (
    <Router>
      <nav className="bg-kenya-green text-white p-4 flex justify-between">
        <Link to="/" className="font-bold">Mtaani Connect</Link>
        <div className="space-x-4">
          <Link to="/">Discover</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App