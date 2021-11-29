const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Handling CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
  

app.get('/hello', (req, res) => {
  res.send('Hello World from API!');
});

require('./services/movies-service')(app);
require('./services/posts-service')(app);
require('./services/profile-service')(app);

console.info("Listening to port 5000");
app.listen(process.env.PORT || 5000);

