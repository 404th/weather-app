
const index_get = (req, res) => {
  res.render( "./main/first.ejs", { title:"Home", layout:"layout.ejs" } )
}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

module.exports = { index_get }
