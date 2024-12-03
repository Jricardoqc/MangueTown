const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

 
const events = [
  {
    id: 1,
    name: "Encruzilhada Na Gira - Ocupação Espaço Poste",
    description: "O espetáculo 'Uma encruzilhada nas giras que o mundo dá', ganha vida pelo grupo de teatro A Kambada Preta",
    image: "https://images.sympla.com.br/674b4a8780078-lg.jpg",  
    startDate: "2024-12-07",
    endDate: "2024-12-07",
  },
  {
    id: 2,
    name: "Caminhos - Ocupação Espaço Poste",
    description: "Interligando Dança, Teatro e Música, o espetáculo mostra a vivência cênica e de terreiro do artista, abordando alegria, dor, fantasia e a realidade contida na brincadeira do Cavalo Marinho.",
    image: "https://images.sympla.com.br/674b495f73edd-lg.jpg",
    startDate: "2024-12-60",
    endDate: "2024-12-06",
  },
  {
    id: 3,
    name: "Aniversário do Grupo Terra",
    description: "Vamos celebrar nossos 32 anos de história e samba do Grupo Terra com a gravação de um DVD!",
    image: "https://images.sympla.com.br/67325f8f91237-lg.jpg",
    startDate: "2024-12-07",
    endDate: "2024-12-07",
  },
  {
    id: 4,
    name: "Garçons cantores e Banda Manhattan",
    description: "Muita musica",
    image: "https://images.sympla.com.br/674d8d1f2f7a3-lg.jpg",
    startDate: "2024-12-07",
    endDate: "2024-12-07",
  },
  {
    id: 5,
    name: "Baile da Macuca 2025",
    description: "O Baile da Macuca 2025 vai ser num lugar astral e ao ar livre.",
    image: "https://images.sympla.com.br/6730ffc5cda59-lg.png",
    startDate: "2024-12-07",
    endDate: "2024-12-07",
  },
  {
    id: 6,
    name: "Oficina de Teatro de Férias da Criative'Se Cultural",
    description: "A Criative'Se Cultural realiza em 2025 a Oficina de Teatro de Férias 'Fazendo a roda da criatividade girar' para crianças entre 07 e 12 anos de idade,",
    image: "https://images.sympla.com.br/671bc78bcd8f3-lg.jpg",
    startDate: "2025-01-07",
    endDate: "2025-01-10",
  },
];
 
app.get("/api/events", (req, res) => {
  res.json(events);
});
 
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});