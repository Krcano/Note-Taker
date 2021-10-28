const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Post route
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

// Get route
router.get("/notes", async (req, res) => {
  // makes sure the db.json file is read beofre it sends back the parsed notes to '/notes'
  const notes = await fs.promises.readFile("./db/db.json", "utf-8");
  res.send(JSON.parse(notes));
});

// Delete route
router.delete("/notes/:id", async (req, res) => {
  // 1 read file, parse into json,
  // 2 create an array from parsed json,
  // 3 find the index of the object that has the id using array method: findIndex() and splice index out of the array,
  // use index to delete that object form the array using splice method
  // 4 write file again, redirect 'back'

  const notes = await fs.promises.readFile("./db/db.json", "utf-8");
  const allNotes = JSON.parse(notes);
  const index = (element) => element.id === req.params.id;
  const noteIndex = allNotes.findIndex(index);
  console.log(`index is:${noteIndex}`);
  allNotes.splice(noteIndex, 1);
  await fs.promises.writeFile("./db/db.json", JSON.stringify(allNotes));
  res.json(allNotes);
});
module.exports = router;
