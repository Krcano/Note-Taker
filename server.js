const express = require("express");
const path = require("path");
const notesRoute = require("./routes/notes");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", notesRoute);
// Get Route for Homepage
app.use(express.static("Public"));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "Public/index.html"))
);

// get route for notes
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "Public/notes.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "Public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
