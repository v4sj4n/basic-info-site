const express = require("express")
const path = require("path")

const app = express()

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contactMe": "contactMe.html",
  "/style.css": "style.css",
}

const publicPath = path.join(__dirname, "public/")

app.get("*", (req, res) => {
  const fileToSend = routes[req.url] || "404.html"
  try {
    if (fileToSend != "404.html") {
      res.status(200).sendFile(path.join(publicPath, fileToSend))
    } else if (fileToSend) {
      res.status(404).sendFile(path.join(publicPath, "404.html"))
    }
  } catch (err) {
    res.status(500).send("Encountered a server error")
  }
})

app.listen(3000, () => console.log("App listening on http://localhost:3000"))
