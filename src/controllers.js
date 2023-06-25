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

const addPost = async (titulo, img, descripcion, likes) => {
    const pgQuery = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(pgQuery, values);
};
const deletePost = async (id) => {
    const pgQuery = "DELETE FROM posts WHERE id = $1";
    const result = await pool.query(pgQuery, [id]);
}
const updatingLikes = async (id) => {
    const likeQuery = 'SELECT likes FROM posts WHERE id = $1';
    const likeResult = await pool.query(likeQuery, [id]);
    const data = likeResult.rows[0];
    let likeQ = data.likes + 1;
    const updatingLikeQuery = 'UPDATE posts SET likes = $1 WHERE id = $2';
    const updateValues = [likeQ, id];
    const updatedResult = await pool.query(updatingLikeQuery, updateValues);
    return updatedResult.rows[0]
};


module.exports = { getPosts, addPost, deletePost, updatingLikes };