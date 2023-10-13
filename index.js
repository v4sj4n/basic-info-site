import http from "http"
import fs from "fs"

// uncomment for local usage
// const port = 2604
// const hostname = "localhost"

const paths = {
  "/": "index.html",
  "/contact-me": "contactMe.html",
  "/about": "about.html",
}

const server = http.createServer((req, res) => {
  const file = paths[req.url] ?? "404.html"
  fs.readFile(file, (err, data) => {
    err
      ? res.writeHead(500).end("Encountered an error with the server")
      : res.writeHead(200, { "Content-Type": "text/html" }).end(data)
  })
})

// Uncomment for local usage
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`)
// })

// Comment for local usage
server.listen()
