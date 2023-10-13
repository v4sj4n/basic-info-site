import http from "http"
import fs from "fs"

const port = 2604
const hostname = "localhost"

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end("Error with the server")
        } else {
          res.writeHead(200, { "Content-type": "text/html" })
          res.end(data)
        }
      })
      break
    case "/about":
      fs.readFile("about.html", (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end("Error with the server")
        } else {
          res.writeHead(200, { "Content-type": "text/html" })
          res.end(data)
        }
      })
      break
    case "/contact-me":
      fs.readFile("contactMe.html", (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end("Error with the server")
        } else {
          res.writeHead(200, { "Content-type": "text/html" })
          res.end(data)
        }
      })
      break

    default:
      fs.readFile("404.html", (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end("Error with the server")
        } else {
          res.writeHead(200, { "Content-type": "text/html" })
          res.end(data)
        }
      })
      break
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
