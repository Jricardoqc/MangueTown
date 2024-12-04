const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
app.use(cors());

const prisma = new PrismaClient();

app.use("/images", express.static("public/images"));
 
app.get("/api/events", async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: "asc" },  
    });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar eventos" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT} :D`);
});