const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT;
const DIST_DIR = __dirname;
const STATIC_FILES = path.join(DIST_DIR, 'client/build');

app.use(parser.json());
app.use(parser.urlencoded({ extended: false}));
app.use(cors());
app.use(morgan('combined'));

// Added Static files.
app.use(express.static(STATIC_FILES));


// app.get('/',(req,res,nxt) => {
//     res.sendFile(STATIC_FILES);
// });

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

app.get('/serverhealth',(req,res,nxt) => {
    res.send('Server Up and Running');
});

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})