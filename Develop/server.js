const express = require('express');
const path = require('path');
const fs = require('fs');
const dbJSON = require('./db/db.json')


const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get Route for Homepage
app.use(express.static('public'));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'public/index.html')));

// get route for notes
app.get('/notes', (req, res)=>
res.sendFile(path.join(__dirname, 'public/notes.html')));

// Post routes
app.post('/api/notes', (req, res)=>{
  console.info(`${req.method} request received to add notes`)
  

 } )


const read = ()=>{
  fs.readFile(dbJSON, 'utf8', (err,data)=>{
    if(err){
      console.error(err);
    }else{
      const parsedData = JSON.parse(data)
      parsedData.push()
    }
  } )
}
 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);