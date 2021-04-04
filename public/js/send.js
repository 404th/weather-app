
document.getElementById("show").addEventListener( 'click', async function() {
  let city = document.getElementById("location_input").value

  try {
    await fetch( `http://localhost:8181/`, {
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        city
      })
    } )
  } catch (err) {
    console.error( err )
  }

} )


