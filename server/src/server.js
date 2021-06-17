const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

require('./database');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors());
    next();
});
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});


