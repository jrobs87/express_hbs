const express = require('express');
const app = express();
const port = 3000;//Loads the handlebars module
const handlebars = require('express-handlebars');//Sets our app to use the handlebars engine
//instead of app.set('view engine', 'handlebars'); 
app.set('view engine', 'hbs');//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
//new configuration parameter
extname: 'hbs',
defaultLayout: 'default',
}));
app.use(express.static('public'));
app.get('/', (req, res) => {
fakeApi = () => 'Faker';
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
console.log(`Rendered root.`)
res.render('main', {layout : 'index', proPlayer: fakeApi()});
});
app.listen(port, () => console.log(`App listening to port ${port}`));