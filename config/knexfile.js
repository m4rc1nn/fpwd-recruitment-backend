import fs from "fs";
import path from "path";

export default {
    client: "sqlite3",
    connection: {
        filename: path.join(process.cwd(), "transactions.db"),
    },
    useNullAsDefault: true,
};
