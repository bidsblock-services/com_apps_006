export default {
  async fetch(request) {
    const url = new URL(request.url)
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(`<!doctype html><html><head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Bidsblock</title>
  <style>body{font-family:system-ui;margin:0;display:grid;place-items:center;min-height:100dvh;background:#0b1220;color:#eaf0ff}.card{padding:32px;border-radius:16px;background:#111827;border:1px solid #1f2937;box-shadow:0 10px 30px rgba(0,0,0,.25)}</style>
</head><body><div class="card"><h1>Hello, world 👋</h1><p>Bidsblock (Workers) is live.</p></div></body></html>`,
        { headers: { 'content-type': 'text/html; charset=UTF-8' } })
    }
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', ts: Date.now() }), { headers: { 'content-type': 'application/json; charset=UTF-8' } })
    }
    if (url.pathname === '/api/hello') {
      return new Response(JSON.stringify({ message: 'Hello from Workers' }), { headers: { 'content-type': 'application/json; charset=UTF-8' } })
    }
    return new Response('Not Found', { status: 404 })
  }
}


