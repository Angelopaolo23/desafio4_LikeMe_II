const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { getPosts, addPost, deletePost, updatingLikes } = require('./controllers.js');

app.listen(3000, console.log("SERVIDOR ENCENDIDO EN PUERTO 3000!"));


app.get('/posts', async (req, res) => {
    try {
        const posts = await getPosts();
        res.json(posts)
    } catch (error) {
        res.status(500).send(error)
    }
});

app.post('/posts', async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body;
        await addPost(titulo, img, descripcion, likes);
        res.json({ titulo, img, descripcion, likes });
    } catch (error) {
        res.status(500).send(error)
    }
});

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deletePost(id);
        res.send("POST ELIMINADO CON EXITO!")
    } catch (error) {
        res.status(500).send(error)
    }
});

app.put('/posts/like/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLikes = await updatingLikes(id);
        res.json(updatedLikes)
    } catch (error) {
        res.status(500).send(error)
    }
});