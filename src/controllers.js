const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'likeme',
    allowExitOnIdle: true
});


const getPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts;");
    return rows
};

const addPost = async (titulo, img, descripcion) => {
    const pgQuery = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3)";
    const result = await pool.query(pgQuery, [titulo, img, descripcion]);
}
const deletePost = async (id) => {
    const pgQuery = "DELETE FROM posts WHERE id = $1";
    const result = await pool.query(pgQuery, [id]);
}
const updatingLikes = async (likes, id) => {
    const pgQuery = "UPDATE viajes SET likes = $1 WHERE id = $2";
    const result = await pool.query(pgQuery, [likes, id]);
};


module.exports = { getPosts, addPost, deletePost, updatingLikes };