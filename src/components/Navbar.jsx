import React from 'react'

export default function Navbar({ current, onNavigate }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold cursor-pointer" onClick={() => onNavigate('home')}>
          GameMart
        </div>
        <nav className="flex gap-4">
          <button className={`px-3 py-1 rounded ${current==='home'?'bg-slate-100':''}`} onClick={() => onNavigate('home')}>Home</button>
          <button className={`px-3 py-1 rounded ${current==='marketplace'?'bg-slate-100':''}`} onClick={() => onNavigate('marketplace')}>Marketplace</button>
          <button className={`px-3 py-1 rounded ${current==='profile'?'bg-slate-100':''}`} onClick={() => onNavigate('profile')}>Profile</button>
        </nav>
      </div>
    </header>
  )
}

