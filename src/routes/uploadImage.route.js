import express from "express";
import multer from "multer";

import { uploadImage } from "../controllers/uploadImage.controller.js";

const router = express.Router();
const upload = multer();
/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload image to S3
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string 
 *                   example: Uploaded Successfully
 *                 mediaUrl:
 *                   type: string
 *                   example: https://your-bucket.s3.ap-south-1.amazonaws.com/uploads/123-image.jpg
 *       400:
 *         description: No file uploaded
 *       500:
 *         description: Upload failed
 */
router.post('/',upload.single('file'),uploadImage);

export default router;