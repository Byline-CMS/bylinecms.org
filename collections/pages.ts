// collections/pages.ts

import type { CollectionDefinition } from '@/@types'

const PagesCollection: CollectionDefinition = {
  name: 'Pages',
  slug: 'pages',
  fields: [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'published', label: 'Published', type: 'checkbox' },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: [
        { label: 'News', value: 'news' },
        { label: 'Blog', value: 'blog' },
        { label: 'Docs', value: 'docs' },
      ],
    },
  ],
}

export default PagesCollection
