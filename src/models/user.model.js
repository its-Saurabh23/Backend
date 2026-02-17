import { pool } from "../config/db.js";
export const createUser = async (name, email) => {
    const query = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING id
  `;
    const result = await pool.query(query, [name, email]);
    return result.rows[0].id;
};

export const fethcAllUsers = async () => {
    const result = await pool.query('SELECT id, name, email FROM users')
    return result.rows;
}