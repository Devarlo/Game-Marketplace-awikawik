import React from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export default function PWABadge() {
  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(r) {},
  })

  if (!offlineReady && !needRefresh) return null
  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded shadow">
      {offlineReady ? <div>App ready to work offline</div> : <div>New content available</div>}
      {needRefresh && <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={() => updateServiceWorker(true)}>Reload</button>}
    </div>
  )
}

