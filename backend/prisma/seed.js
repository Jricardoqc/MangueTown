const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.event.createMany({
    data: [
      {
        name: "Coquetel Molotov Live",
        date: new Date("2023-12-07T16:00:00"),
        image: "/images/coquetel-event.jpg",
        location: "Campus UFPE - Recife, PE",
      },
      {
        name: "Downtown Band",
        date: new Date("2023-12-06T20:30:00"),
        image: "/images/downtown-band-event.jpg",
        location: "La Ursa, Paço Alfândega - Recife, PE",
      },
      {
        name: "Dheko",
        date: new Date("2023-12-06T21:00:00"),
        image: "/images/dheko-event.jpg",
        location: "Frege, Av. Rio Branco, 155 - Recife, PE",
      },
      {
        name: "Christmas Box Choral",
        date: new Date("2023-12-01T18:00:00"),
        image: "/images/caixa-natal-event.jpg",
        location: "Caixa Cultural, Marco Zero - Recife, PE",
      },
      {
        name: "Recife's Christmas Opening",
        date: new Date("2023-12-01T18:00:00"),
        image: "/images/abertura-natal.jpg",
        location: "Parque Dona Lindu - Recife, PE",
      },
      {
        name: "Christmas Cantata",
        date: new Date("2023-12-03T18:30:00"),
        image: "/images/cantata-natalina-event.jpg",
        location: "Teatro Luiz Mendonça, Parque Dona Lindu - Recife, PE",
      },
      {
        name: "Colgate Classics",
        date: new Date("2023-12-01T16:00:00"),
        image: "/images/colgate-classico-event.jpg",
        location: "Parque da Macaxeira - Recife, PE",
      },
    ],
  });
}

main()
  .then(() => console.log("Dados inseridos com sucesso!"))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });