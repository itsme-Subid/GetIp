import express from "express";
import requestIp from "request-ip";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://devsubid.vercel.app"],
};

app.use(cors(corsOptions));

app.post("/api/getip", (req, res) => {
  const clientIp = requestIp.getClientIp(req);
  res.json({ ip: clientIp });
});

app.all("/api/getip", (req, res) => {
  res.status(405).json({ message: "Method not allowed" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
