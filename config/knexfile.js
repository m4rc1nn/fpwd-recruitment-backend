import fs from "fs";
import path from "path";

const dbDirectory = path.join(process.cwd(), "tmp");

// Ensure the directory exists
if (!fs.existsSync(dbDirectory)) {
    fs.mkdirSync(dbDirectory, { recursive: true });
}

export default {
    client: "sqlite3",
    connection: {
        filename: path.join(dbDirectory, "transactions.db"),
    },
    useNullAsDefault: true,
};
