const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/images", express.static("public/images"));


const events = [
  {
    id: 1,
    name: "Coquetel Molotov Live",
    date: "SAT · DEZ 07 · 16:00",
    image: "/images/Coquetel Event.jpg",
    location: "Campus UFPE - Recife, PE",  
  },
  {
    id: 2,
    name: "Downtown Band",
    date: "FRI · DEZ 06 · 20:30",
    image: "/images/Downtown band Event.jpg",
    location: "La Ursa, Paço Alfândega - Recife, PE",  
  },
  {
    id: 3,
    name: "Dheko",
    date: "FRI · DEZ 06 · 21:00",
    image: "/images/DHEKO Event.jpg",
    location: "Frege, Av. Rio Branco, 155 - Recife, PE",  
  },
  {
    id: 4,
    name: "Christmas Box Choral",
    date: "SUN · DEZ 01 · 18:00",
    image: "/images/Caixa de natal Event.jpg",
    location: "Caixa Cultural, Marco Zero - Recife, PE",  
  },
  {
    id: 5,
    name: "Recife's Christmas Opening",
    date: "SUN · DEZ 01 · 18:00",
    image: "/images/abertura-natal.jpg",
    location: "Parque Dona Lindu - Recife, PE",  
  },
  {
    id: 6,
    name: "Christmas Cantata",
    date: "TUES · DEZ 03 · 18:30",
    image: "/images/Cantata natalina Event.jpg",
    location: "Teatro Luiz Mendonça, Parque Dona Lindu - Recife, PE",  
  },
  {
    id: 7,
    name: "Colgate Classics",
    date: "SUN · DEZ 01 · 16:00",
    image: "/images/Colgate classico Event.jpg",
    location: "Parque da Macaxeira - Recife, PE",  
  },
];
 
app.get("/api/events", (req, res) => {
  res.json(events);
});
 
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT} :D`);
});