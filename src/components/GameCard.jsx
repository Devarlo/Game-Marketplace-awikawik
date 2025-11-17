import React from 'react'

export default function GameCard({ game }) {
  return (
    <article className="bg-white rounded-lg shadow p-4 flex gap-4 hover:shadow-lg transform hover:-translate-y-1 transition-all">
      <img src={game.thumbnail} alt={game.name} className="w-24 h-24 rounded-lg object-cover" />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{game.name}</h3>
          <p className="text-sm text-gray-600">{game.genre} • <span className="font-medium">{game.price}</span></p>
          <p className="mt-2 text-sm text-gray-700">{game.short}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">Beli</button>
          <button className="text-sm text-gray-500">Details</button>
        </div>
      </div>
    </article>
  )
}
