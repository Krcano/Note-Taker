const router = require("express").Router();
const { error } = require("console");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Post routes
router.post("/notes", async (req, res) => {
  console.info(`${req.method} request received to add notes`);
  //await is making sure the db.json file is read before it assigns it to the variable and executes the rest of the code
  const notes = await fs.promises.readFile("./db/db.json", "utf-8");
  const notesArray = JSON.parse(notes);
  // assigns an unique id and calls the process newID
  const newId = uuidv4();
  //Names the req.body newNote
  const newNote = req.body;
  //makes the newId(uuid) the newNote(which is req.body).id
  newNote.id = newId;
  console.log(notes);
  console.log(newNote);
  notesArray.push(newNote);
  //await is making sure the db.json file is written before it refreshes the page
  await fs.promises.writeFile("./db/db.json", JSON.stringify(notesArray));
  res.redirect("back");
});

router.get("/notes", async (req, res) => {
  // makes sure the db.json file is read beofre it sends back the parsed notes to '/notes'
  const notes = await fs.promises.readFile("./db/db.json", "utf-8");
  res.send(JSON.parse(notes));
});

router.delete("/notes/:id", async(req, res, next) => {
  // const id = req.params.id;
  // 1 read file, parse into json,
  // 2 create an array from parsed json,
  // 3 find the index of the object that has the id using array method: findIndex() and splice index out of the array,
  // use index to delete that object form the array using splice method
  // 4 write file again, redirect 'back'

  
  const parsedNotesArray = await fs.promises.readFile("./db/db.json", "utf-8");
  
  const indexOfdeleted = JSON.parse(parsedNotesArray.indexOf((deletedNote) => deletedNote.id === req.params.id ))

  if (indexOfdeleted === req.params.id) {
    parsedNotesArray.slice(indexOfdeleted,(1));
    return  console.log(indexOfdeleted)
  
  }else{console.log(error)}

  // 1st attempt not working
  // const notes = JSON.parse(fs.readFile("./db/db.json"));
  // const deleted = notes.filter((deletedNote)=> deletedNote.id !== req.params.id)
  // fs.writeFile("./db/db.json", JSON.stringify(deleted));
  // res.json(deleted)

  // 2nd attempt not working
  //   const currentIndex = notesArray.filter(idIndex);
  //   if(idIndex !== currentIndex ){
  //     notesArray.splice(idIndex, 1);
  //     res.status(204).send
  //   }else{
  //     res.status(404).send()
  //   }
});
module.exports = router;
