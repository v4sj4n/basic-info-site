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
  if (Object.keys(routes).includes(req.url)) {
    res.sendFile(path.join(publicPath, fileToSend))
  } else {
    res.status(404).sendFile(path.join(publicPath, "404.html"))
  }
})

app.listen(3000, () => console.log("App listening on http://localhost:3000"))
