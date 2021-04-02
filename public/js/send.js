
document.getElementById("show").addEventListener( 'click', async () => {
  let location = document.getElementById("location_input").value

  try {
    let data = await fetch( `/city?${ location }` )
    if ( data ) {
      console.log(data)
    } else {
      throw new Error
    }
  } catch (err) {
    console.error( err )
  }

} )


