const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
//const result = require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
//const DIST_DIR = __dirname;
//const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(parser.json());
app.use(parser.urlencoded({ extended: false}));
app.use(cors());
app.use(morgan('combined'));

// Addede Static files.
//app.use(express.static(DIST_DIR))


app.get('/',(req,res,nxt) => {
    res.sendFile(HTML_FILE);
});

app.get('/serverhealth',(req,res,nxt) => {
    res.send('Server Up and Running');
});

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})