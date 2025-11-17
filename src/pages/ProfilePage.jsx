import React from 'react'

export default function ProfilePage() {
  // Hard-coded sesuai syarat: nama, nim, kelompok
  const profile = {
    nama: 'Devarlo Rahadyan Razan',
    nim: '21120123140132',
    kelompok: 'Kelompok 12'
  }
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-4 rounded shadow max-w-md">
        <p><strong>Nama:</strong> {profile.nama}</p>
        <p><strong>NIM:</strong> {profile.nim}</p>
        <p><strong>Kelompok:</strong> {profile.kelompok}</p>
      </div>
    </section>
  )
}
