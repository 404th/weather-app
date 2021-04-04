const axios = require('axios')

const index_get = async (req, res) => {
  res.render( "main/first.ejs", {
    grad:null,
    speed:null,
    icon:null,
    info:"hey what is up?"
  } )
}

const index_post = async (req, res) => {

  let { city } = req.body
  
  try {
  await axios.get( `http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ process.env.API_KEY }&units=metric` )
    .then( data => {

      let grad = data.data.main.temp
      let speed = data.data.wind.speed
      let icon = data.data.weather[0].icon
      let info = "Shto proizashol?"

      res.render( "main/first.ejs", { grad, speed, icon, info } )
    })
  } catch( err ){
    res.render( "main/first.ejs", {
      grad:null,
      speed:null,
      icon:null,
      info:"nima gap dost?"
    } )
  }

}

module.exports = { index_get, index_post }
