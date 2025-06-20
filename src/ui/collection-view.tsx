// File: src/CollectionView.tsx
import { useEffect, useState } from 'react'
import Pages from '../../collections/pages'
import { FormRenderer } from './form-renderer'

export const CollectionView = () => {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/pages')
        if (!res.ok) {
          console.error(`Failed to fetch pages: ${res.statusText}`)
        } else {
          const data = await res.json()
          setItems(data)
        }
      } catch (err) {
        // Optionally, you can show this error to the user
        console.error(err)
      }
    }
    fetchPages()
  }, [])

  const handleSubmit = async (data: any) => {
    try {
      const postRes = await fetch('http://localhost:3001/api/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!postRes.ok) {
        console.error(`Failed to create page: ${postRes.statusText}`)
      }
      const res = await fetch('http://localhost:3001/api/pages')
      if (!res.ok) {
        console.error(`Failed to fetch pages: ${res.statusText}`)
      } else {
        const updated = await res.json()
        setItems(updated)
      }
    } catch (err) {
      // Optionally, you can show this error to the user
      console.error(err)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Create New Page</h2>
      <FormRenderer fields={Pages.fields} onSubmit={handleSubmit} />
      <h2 className="text-xl font-bold mt-10">All Pages</h2>
      <ul className="list-disc pl-5">
        {items?.map((item, i) => (
          <li key={i} className="border-b py-2">
            {item.title} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  )
}
