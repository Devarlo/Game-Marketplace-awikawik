import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import MarketplacePage from './pages/MarketplacePage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/navbar'
import PWABadge from './components/PWABadge'

export default function AppRoot() {
  const [page, setPage] = useState('home')
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar current={page} onNavigate={setPage} />
      <main className="max-w-5xl mx-auto p-4">
        {page === 'home' && <HomePage />}
        {page === 'marketplace' && <MarketplacePage />}
        {page === 'profile' && <ProfilePage />}
      </main>
      <PWABadge />
    </div>
  )
}
