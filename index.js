const { NominatimJS } = require('@owsas/nominatim-js');

NominatimJS.search({
  q: 'bakery in new york'
}).then(results => {
  // do something with results
  console.log(results);
}).catch(error => {
  // error ocurred
})
