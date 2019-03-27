const https = require('https');
const Yelp = {
    Client_id=rKhZlF7W7YZT7gUSKHY5NA;
    API_key=g0vePKBWfehSOSmFJY-bqLC_xwkKl1zud886bgmUiO7B3RPYcFJak1duv7GrrA6FXbM-8_ZWZf7I-g1XiDVl3vHT35_QDtz-Xb1c8ZBGkqehNaMWdgvRBRxBXN-XXHYx;
}



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
