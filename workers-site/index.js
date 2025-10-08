addEventListener('fetch', event => {
  event.respondWith(
    handleRequest(event.request)
  )
})

async function handleRequest(request) {
  try {
    return await fetch(request)
  } catch {
    const url = new URL(request.url)
    return fetch(`${url.origin}/index.html`)
  }
}