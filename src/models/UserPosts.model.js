import { pool } from "../config/db.js"

export const fetchAllPost = async (userId) => {
  let query = `SELECT * FROM posts`
  const values = [];
  if (userId) {
    query += " WHERE user_id = $1";
    values.push(userId);
  }
  const result = await pool.query(query, values);
  return result.rows;
}
export const findPostById = async (postId) => {
  let query = `SELECT * FORM posts WHERE id = $1`
  const values =[id];
  const result = await pool.query(query,values);
  return result.rows[0];
}

