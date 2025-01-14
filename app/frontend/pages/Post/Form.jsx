import { useForm } from '@inertiajs/react'

export default function Form({ post, onSubmit, submitText }) {
  const form = useForm({
    title: post.title || '',
    body: post.body || '',
    published_at: post.published_at || '',
    published: post.published || false,
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('title', e.target.value)}
        />
        {errors.title && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.title.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          value={data.body}
          rows="4"
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('body', e.target.value)}
        />
        {errors.body && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.body.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="published_at">Published at</label>
        <input
          type="datetime-local"
          name="published_at"
          id="published_at"
          value={data.published_at}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('published_at', e.target.value)}
        />
        {errors.published_at && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.published_at.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="published">Published</label>
        <input
          type="checkbox"
          name="published"
          id="published"
          checked={!!data.published}
          className="block mt-2 h-5 w-5"
          onChange={(e) => setData('published', e.target.checked)}
        />
        {errors.published && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.published.join(', ')}
          </div>
        )}
      </div>

      <div className="inline">
        <button
          type="submit"
          disabled={processing}
          className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
