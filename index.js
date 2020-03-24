const express = require('express');
const app = express();
require('dotenv').config()
const portServer = process.env.PORT || process.env.PORTSERVER;//Loads the handlebars module
const portView = process.env.PORTVIEW;  
const handlebars = require('express-handlebars');//Sets our app to use the handlebars engine
//instead of app.set('view engine', 'handlebars'); 
app.set('view engine', 'hbs');//instead of app.engine('handlebars', handlebars({

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'default',
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    fakeApi = () => 'Faker'; // API Call Here :)
    console.log(`Rendered root and fake API call.`);
  
        res.render('main', { layout: 'index', port: {dev: portView, server: portServer} });
    
})

app.get('/new', (req, res) => {
    res.render('new', { layout: 'index'} )
})

app.listen(portServer, () => console.log(`App listening to port ${portServer}`));