const https = require('https');



https.get('https://api.yelp.com/v3/autocomplete?text=del&latitude=42.3601&longitude=71.0589',(resp) => {
    let data='';
    resp.on('data', (chunk)=> {
        data+= chunk;
    });
resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
});

let search = app.get('/search', function search (req, res){
    console.log(req.query["search"]);
    res.render('search.ejs')
 });;

url = 'https://api.yelp.com/v3/businesses/';
url += search;

https.get(search, (resp) => {
    let data='';

    resp.on('data', (chunk)=> {
        data+= chunk;
    });
resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
});
});