import { Route } from "express";
import express from "express";
import { getAllposts } from "../controllers/postController.controller.js";

const router = express.Router();  ;
/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts or filter posts by query parameters
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         description: Filter posts by user ID
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of posts per page
 *     responses:
 *       200:
 *         description: List of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 timestamp:
 *                   type: string
 *                   example: 2026-02-10T12:30:00Z
 *                 results:
 *                   type: integer
 *                   example: 4
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       user_id:
 *                         type: integer
 *                         example: 2
 *                       title:
 *                         type: string
 *                         example: "My first post"
 *                       content:
 *                         type: string
 *                         example: "This is the content of the post."
 */
router.get('/',getAllposts);

export default router;