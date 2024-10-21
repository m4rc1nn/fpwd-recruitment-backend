import dotenv from "dotenv";
import http from "http";
import { WebSocketServer, WebSocket } from "ws";
import express from "express";
import setupDatabase from "./db/setup.js";
import exchangeRateRoutes from "./routes/exchangeRateRouter.js";
import transactionRoutes from "./routes/transactionRouter.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", exchangeRateRoutes);
app.use("/api", transactionRoutes);

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const broadcast = (data) => {
    const jsonData = JSON.stringify(data);
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(jsonData);
        }
    });
};

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
    await setupDatabase();
    console.log(`Server is running on port ${PORT}`);
});

export default app;

export { broadcast };
