import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import postsRoutes from "./routes/post.routes.js";
import uploadImage from './routes/uploadImage.route.js'

import { swaggerSpec } from "./config/swagger.js";
import swaggerUi from "swagger-ui-express"

const app = express();

app.use(cors());
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/',(req, resp) => {
    resp.send("Node js ");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/upload", uploadImage);

export default app;  



 