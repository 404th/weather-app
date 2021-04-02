
const index_get = async (req, res) => {
  res.render( "./main/first.ejs", { title:"Home", layout:"layout.ejs" } )
}

const index_post = async (req, res) => {
  // const { location } = req.data

  console.log( location )
  console.log( req.body )
  console.log( "location" )

  res.render( "./main/first.ejs", { title:"Home", layout:"layout.ejs" } )
}

module.exports = { index_get, index_post }
