import { config } from "dotenv";
config({ path: "src/.env" });

import app from "./server";
import { connectDB } from "./utils/mongodb.util";

const PORT = process.env.PORT || 8000;

(async () => {
    try {
        await connectDB();
        console.log("DB Connected");

        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    } catch (error) {
        console.log("Error ", error);
    }
})();
