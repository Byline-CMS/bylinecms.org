import { CollectionView } from './ui/collection-view'

import './tailwind.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow p-4 text-lg font-semibold">Foo CMS Admin</header>
      <main className="max-w-3xl mx-auto mt-6">
        <CollectionView />
      </main>
    </div>
  )
}
