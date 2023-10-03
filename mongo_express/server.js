const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const PORT = 3009;

const MONGO_URL = 'mongodb://127.0.0.1:27017/notesdb';

//create model for notes

const NoteSchema = new mongoose.Schema({
    title: String, 
    text: String 
});

const Note = mongoose.model('Note', NoteSchema);

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.use(bodyParser.json());
app.get('/notes/', (req, res) => {
    console.log(`welcome to the GET ALL NOTES route`);
    //GET all notes from mongo DB via mongoose and return them as response
    Note.find().then((notes) => res.send(notes)).catch((error) => res.status(500).send(error));
});

app.get('/notes/:id', (req, res) => {
    console.log(`welcome to the GET route`);
    // GET specfic note with ID from mongo DB via mongoose and return it as response
   const noteId = req.params.id;
   Note.findById(noteId).then((note) => res.send(note)).catch((error) => res.status(500).send(error));
});

app.post('/notes', (req, res) => {
    console.log(`welcome to the POST route`);
    //POST a note with title and text to mongo DB via mongoose and return the note as a response
    const note = new Note(req.body);
    note.save().then((savedNote) => res.json(savedNote)).catch((error) => res.status(500).send(error));
});

app.put('/notes/:id', (req, res) => {
    console.log(`welcome to the PUT route`);
    //UPDATE a note with title and text to mongo DB via mongoose and return the note as a response
});

app.delete('/notes/:id', (req, res) => {
    console.log(`welcome to the DELETE route`);
    //DELETE a specific note with ID and return acknowledgement as response
});

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});