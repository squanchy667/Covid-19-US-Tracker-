const express = require('express');
const https = require('https');
var cors = require('cors');
const router = express.Router();
const app = express(),
      port = 3080;

app.use(cors());

// getting Unites States data 
app.get('/api/UnitesStatesData', (req, res) => {
         https.get('https://api.covidtracking.com/v1/us/current.json', (resp) => {
         let data = '';
            resp.on('data', (chunk) => {
                    data += chunk;
            });

            resp.on('end', () => {
                res.json(JSON.parse(data));
            });
     });
});

// getting individual States data 
app.get('/api/StatesData', (req, res) => {
    https.get('https://api.covidtracking.com/v1/states/'+req.query.state+'/current.json', (resp) => {
    let data = '';
       resp.on('data', (chunk) => {
               data += chunk;
       });

       resp.on('end', () => {
           res.json(JSON.parse(data));
       });
    });
       
});

// getting individual States elaborated info
app.get('/api/StatesInfo', (req, res) => {
    https.get('https://api.covidtracking.com/v1/states/'+req.query.state+'/info.json', (resp) => {
    let data = '';
       resp.on('data', (chunk) => {
               data += chunk;
       });

       resp.on('end', () => {
           res.json(JSON.parse(data));
       });
    });   
});


app.listen(port, () => {
    console.log(`Server listening on the port:${port}`);
});
