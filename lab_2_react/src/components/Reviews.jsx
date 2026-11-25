import { useEffect, useState } from 'react'

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => {
        if (!response.ok) throw new Error('Помилка завантаження')
        return response.json()
      })
      .then(data => setReviews(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="card">
      <h2>ВІДГУКИ РОБОТОДАВЦІВ</h2>
      <div className="lightsaber-divider"></div>

      {loading && <p className="loading-text">Завантаження відгуків...</p>}
      {error && <p className="error-text">Не вдалося завантажити відгуки.</p>}

      <div className="reviews-list space-y-4">
        {reviews.slice(0, 5).map(review => (
          <article key={review.id} className="review-item">
            <h3 className="review-title">{review.name}</h3>
            <p className="review-email">
              <span data-type="secure">Email:</span> {review.email}
            </p>
            <p className="review-body">{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews