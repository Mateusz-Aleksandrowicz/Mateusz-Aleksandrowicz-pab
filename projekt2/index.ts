import express from 'express'
import { Request, Response } from 'express'
import { Note } from './note'
import { v4 as uuidv4 } from 'uuid'
import { parse } from 'path'

const app = express()

app.use(express.json())

const notes: Note[] = []

app.get('/get/note/:id', function (req: Request, res: Response) {

    const id = req.params.id
    const result = notes.find(el => el.id === id)

    if(result){
        res.status(200).send(result)
        console.log(result)
    }
    else{
        res.status(404).send("Notatka nie istnieje")
    }
    
})

app.post('/post/note', function (req: Request, res: Response) {

    const title = req.body.title
    const content = req.body.content
    const note = req.body;

    if (title === undefined) {
        res.status(400).send('Podaj poprawny tytuł!')
        console.log("Podaj poprawny tytuł!")
    }

    else if (content === undefined) {
        res.status(400).send('Podaj poprawna tresc!')
        console.log("Podaj poprawna tresc!")
    }

    else {
        const noteId = uuidv4(); // random id
        const noteWithId = { ...note, id: noteId }; // dodanie do obiektu "note" nowego param "id"
        notes.push(noteWithId);

        console.log(noteWithId) // e.x. req.body.title 
        res.status(201).send(noteWithId)
        console.log(notes)
    }
})

app.delete('/delete/note/:id', function (req: Request, res: Response) {

    const id = req.params.id
    const result = notes.find(el => el.id === id)
    const index = notes.indexOf(result!, 0);

    if (index > -1) {
    notes.splice(index, 1);
}
    res.send(notes)
    console.log(notes)
    
})

app.listen(3000)