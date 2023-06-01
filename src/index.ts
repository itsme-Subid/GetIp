import express, { Express, Request, Response } from "express";
import requestIp from "request-ip";
import cors from "cors";

const app: Express = express();
const port = 4000;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.post("/api/getip", (req: Request, res: Response) => {
  const clientIp = requestIp.getClientIp(req);
  res.json({ ip: clientIp });
});

app.all("/api/getip", (_, res: Response) => {
  res.status(405).json({ message: "Method not allowed" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
