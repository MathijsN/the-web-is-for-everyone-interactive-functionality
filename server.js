import express from 'express';
import { Liquid } from 'liquidjs';
// import { graphql, buildSchema } from 'graphql';

const app = express()

// Maak werken met data uit formulieren iets prettig
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')




// Snapmaps

const groupsResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_group?fields=name,uuid,snappmap.snappthis_snapmap_uuid.*.*.*&filter[uuid][_eq]=6d82507e-9bc9-452e-a768-a1bb90d7a37d')
const groupsJSON = await groupsResponse.json()


app.get('/snappmaps', async function (request, response) {

  response.render('snappmaps.liquid', { groups: groupsJSON.data, currentPage: '' })
})




app.get('/snappmaps/:uuid', async function (request, response) {

  const snappmapResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=*.*.*&filter[uuid][_eq]=' + request.params.uuid)
  const snappmappJSON = await snappmapResponse.json()
  const path = request.path

  response.render('snappmap.liquid', { snappmap: snappmappJSON.data, groups: groupsJSON.data, path: path, currentPage: '' })
})











// Snapps


app.get('/snapps/:location', async function (request, response) {

  const snappsResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snap?fields=*.*&filter[location][_eq]=' + request.params.location)
  const snappsJSON = await snappsResponse.json()


  response.render('snappmap.liquid', { snapps: snappsJSON.data, currentPage: 'snappmaps' })
})


app.get('/snapps/snappmap/:uuid', async function (request, response) {

  const snappResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snap?fields=*.*&filter[uuid][_eq]=' + request.params.uuid)
  const snappJSON = await snappResponse.json()

  response.render('snapp.liquid', { snapp: snappJSON.data[0], groups: groupsJSON.data, path: request.path, currentPage: '' })
})

app.get('/snapps/location/:uuid', async function (request, response) {

  const snappResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snap?fields=*.*&filter[uuid][_eq]=' + request.params.uuid)
  const snappJSON = await snappResponse.json()

  response.render('snapp.liquid', { snapp: snappJSON.data[0], groups: groupsJSON.data, path: request.path, currentPage: '' })
})


app.get('/snapps/user/:uuid', async function (request, response) {

  const snappResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snap?fields=*.*&filter[author][uuid][_eq]=' + request.params.uuid)
  const snappJSON = await snappResponse.json()

  response.render('snappmap.liquid', { snapps: snappJSON.data, path: request.path, currentPage: '' })
})








app.use((req, res) => {
  res.status(404).render('404.liquid')
})






/*
// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
app.get(…, async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render(…)
})
*/

/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  const fetchResponse = await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  // Als de POST niet gelukt is, kun je de response loggen. Sowieso een goede debugging strategie.
  // console.log(fetchResponse)

  // Eventueel kun je de JSON van die response nog debuggen
  // const fetchResponseJSON = await fetchResponse.json()
  // console.log(fetchResponseJSON)

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/






app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}/snappmaps`)
})