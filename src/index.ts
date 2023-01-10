import express from "express";
import driverRouter from "./routes/driverRouter";

const app = express();
const apiVersion = "/api/v1"; 

app.use(express.json());

const PORT = 3001;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use(`${apiVersion}/driver`,driverRouter) 

app.listen(PORT, "localhost", () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`🚀🏁 Server ready at ${url}`);
});
