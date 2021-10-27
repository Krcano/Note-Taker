const express = require('express');


// Post routes
app.post('/api/notes', (req, res)=>{
    console.info(`${req.method} request received to add notes`)
  
    const {title, text} = req.body
  
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