const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { getPosts, addPost, deletePost, updatingLikes } = require('./controllers.js');

app.listen(3000, console.log("SERVIDOR ENCENDIDO EN PUERTO 3000!"));


app.get('/posts', async (req, res) => {
    const posts = await getPosts();
    res.json(posts)
});

app.post('/posts', async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    await addPost(titulo, img, descripcion);
    res.json(req.body);
});

app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    await deletePost(id);
    res.send("POST ELIMINADO CON EXITO!")
});

app.put('/posts/like/:id', async (req, res) => {
    const { id } = req.params;
    const { likes } = req.query;
    await updatingLikes(likes, id);
    //res.json(req.query)
});