const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const app = express();
const PORT = 3000;

const corsOptions = {
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}
 
app.use(cors(corsOptions)) 

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.use('/comments', require('./routes/comments'));

app.get('/', (req, res, next) => {
    res.json({ bobyard: 'test' });
});

app.listen(PORT, () => {
    console.log(`App running on PORT http://localhost:${PORT}`)
});