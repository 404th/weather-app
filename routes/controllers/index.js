
const index_get = async (req, res) => {
  res.render( "./main/first.ejs", { title:"Home", layout:"layout.ejs" } )
}

module.exports = { index_get }
