addEventListener("fetch", event => {
  event.respondWith(
    handleRequest(event.request)
  )
})

async function handleRequest(request) {
  const url = new URL(request.url)

  if (!url.pathname.includes('.')) {
    return fetch(`${url.origin}/index.html`)
  }

  return fetch(request)
}
