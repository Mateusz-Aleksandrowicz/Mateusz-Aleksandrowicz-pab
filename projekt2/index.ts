import express from 'express'
import { Request, Response } from 'express'
import { Note } from '/GithubRepositories/Mateusz-Aleksandrowicz-pab/projekt2/note'
import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(express.json())

const notes: Note[] = []

app.get('/', function (req: Request, res: Response) {

    res.send(notes)
    console.log(notes)
})

app.post('/note', function (req: Request, res: Response) {

    const note = req.body;
    const noteId = uuidv4(); // random id
    const noteWithId = { ...note, id: noteId }; // dodanie do obiektu "note" nowego param "id"

    notes.push(noteWithId);

    console.log(req.body) // e.x. req.body.title 
    res.status(200).send('POST Hello World')
})

app.listen(3000)