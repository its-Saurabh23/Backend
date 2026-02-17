
import { PutObjectCommand } from "@aws-sdk/client-s3"
import s3 from "../config/s3Client.js"
import { errorResponse, successResponse } from "../utils/response.js";

export const uploadImage = async (req, res) => {
    try {

        console.log('Image Upload==========>',req.file);
        if (!req.file) {
            errorResponse(res, "No file uploaded", 400);
        }
        const key = `uploads/${Date.now()}-${req.file.originalname}`;

        const param = {
            Bucket: process.env.AWS_BUCKET_NAME,  // AWS buket Name
            Key: key,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
        }
        await s3.send(new PutObjectCommand(param));

        const data = {
            message: 'Uploaded Successfully',
            mediaId: 123
        }
        successResponse(res, data)

    } catch (error) {
        console.error("S3 Upload Error:", error);
        errorResponse(res, error.message);
    }
}