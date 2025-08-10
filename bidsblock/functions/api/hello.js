export async function onRequestGet() {
  return new Response(JSON.stringify({ message: 'Hello from Bidsblock API' }), {
    headers: { 'content-type': 'application/json; charset=UTF-8' }
  })
}


