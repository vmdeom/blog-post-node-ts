const app = require('express')();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

var environment = 'STG';

if (environment.toLowerCase() == 'stg'){
    dotenv.config({ path: './stg/.env'}); //staging
}
else if(environment.toLowerCase() == 'prd'){
    dotenv.config({ path: './prd/.env'}); //production settings
}
else{
    throw new Error('must define the environment first: prd or stg')
}

app.listen(process.env.PORT, process.env.ADDRESS, () => {
    console.log(`listening at ${process.env.ADDRESS}:${process.env.PORT}, ${environment} env`);
})