import React, { useState } from 'react'
import { Games } from '../data/Game'
import GameCard from '../components/GameCard'

export default function MarketplacePage() {
  const [query, setQuery] = useState('')
  const filtered = Games.filter(g => g.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
      <div className="mb-4">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari game..." className="w-full p-2 border rounded" />
      </div>
      <div className="grid gap-4">
        {filtered.map(g => <GameCard key={g.id} game={g} />)}
      </div>
    </section>
  )
}

