addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  try {
    return await fetch(`${url.origin}${url.pathname}`)
  } catch {
    return fetch(`${url.origin}/index.html`)
  }
}
