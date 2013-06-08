var request = require('request');

/*
request.post('http://api.iproperty.com/2.3.2/ListingServices.asmx/GET_SearchResult', {
  form: {
    country : '1',
    listingType : ''
  }},

  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    } else {
      console.log('ERROR: '+error)
    }
  }
);
*/

request('http://www.starproperty.my/api/PropertySearch.php?search_text=Jalan%203/23A%20Danau%20Kota,%20Kuala%20Lumpur&for_type=1&land_title_type=1&sort=datehl&query_max=10&query_start=0&ignore=&asymmetric=1', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  } else {
    console.log('ERROR: '+error)
  }
})
