import React, { useMemo, useState } from 'react'
import { Games } from '../data/Game'
import GameCard from '../components/GameCard'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const set = new Set(Games.map(g => g.genre))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = Games.filter(g => {
    const matchesQuery = g.name.toLowerCase().includes(query.toLowerCase()) || g.genre.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = activeCategory === 'All' || g.genre === activeCategory
    return matchesQuery && matchesCategory
  })

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-500 text-white p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Temukan Game Favoritmu</h1>
            <p className="mt-2 text-indigo-100/90">Marketplace Game sederhana — jelajahi, cari, dan beli game indie terbaik.</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md">Explore</button>
              <button className="bg-white text-indigo-700 px-4 py-2 rounded-md">Jual Game</button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <label className="hidden">Search</label>
            <div className="bg-white rounded-lg p-3 shadow flex items-center gap-3">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 outline-none text-gray-800 bg-transparent"
                placeholder="Cari game atau genre (mis. Racing, Puzzle)..."
              />
              <button className="bg-indigo-600 text-white px-3 py-1 rounded">Search</button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-3 py-1 rounded-full text-sm ${activeCategory===c? 'bg-white text-indigo-700':'bg-white/20 text-white'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Games</h2>
          <p className="text-sm text-gray-500">Menampilkan {filtered.length} hasil</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(g => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </main>
  )
}
