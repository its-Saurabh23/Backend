import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB} from "./src/config/db.js";
import cors from 'cors'

dotenv.config(); // ✅ correct usage

const PORT = process.env.PORT || 3000;
app.use(cors());

connectDB();  

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 