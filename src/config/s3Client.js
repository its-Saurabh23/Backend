import { S3Client } from '@aws-sdk/client-s3'

const s3 = new S3Client({
    region: "ap-south-1", // change to your region
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY, // change based on your key
        secretAccessKey: process.env.AWS_SECRET_KEY, // change based on your key
    },
})

export default s3