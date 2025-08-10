export async function onRequestGet() {
  return new Response(JSON.stringify({ status: 'ok', ts: Date.now() }), {
    headers: { 'content-type': 'application/json; charset=UTF-8' }
  })
}


