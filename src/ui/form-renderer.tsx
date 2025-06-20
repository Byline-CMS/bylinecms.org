import type { Field } from '@/@types'

export const FormRenderer = ({
  fields,
  onSubmit,
}: {
  fields: Field[]
  onSubmit: (data: any) => void
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data: any = {}
    fields.forEach((field) => {
      if (field.type === 'checkbox') {
        data[field.name] = formData.get(field.name) === 'on'
      } else {
        data[field.name] = formData.get(field.name)
      }
    })
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <div key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <input id={field.name} type="text" name={field.name} required={field.required} />
              </div>
            )
          case 'checkbox':
            return (
              <div key={field.name}>
                <label>
                  <input type="checkbox" name={field.name} />
                  {field.label}
                </label>
              </div>
            )
          case 'select':
            return (
              <div key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <select id={field.name} name={field.name}>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )
        }
      })}
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  )
}
