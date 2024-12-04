document.addEventListener("DOMContentLoaded", async () => {
  const carrossel = document.getElementById("carrossel-eventinhos");

  try {
    const response = await fetch("http://localhost:5000/api/events");
    const events = await response.json();

    carrossel.innerHTML = "";

    function formatDate(dateString) {
      const options = { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" };
      const date = new Date(dateString);
      return date.toLocaleDateString("pt-BR", options).toUpperCase();  
    } 

    events.forEach((event) => {
      const eventElement = document.createElement("div");

      eventElement.innerHTML = `
      <a href="" class="eventinho">
        <img src="http://localhost:5000${event.image}" alt="${event.name}">
        <div id="descricao-eventinho">
          <span class="data">${formatDate(event.date)}</span>
          <p>${event.name}</p>
          <span>${event.location}</span>
        </div>
      </a>
      `;
      carrossel.appendChild(eventElement);
    });

    function moveCarrossel(direction) {
      const scrollAmount = 300;  

      if (direction === "next") {
        carrossel.scrollLeft += scrollAmount; 
      } else if (direction === "prev") {
        carrossel.scrollLeft -= scrollAmount;  
      }
    }
 
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    prevButton.addEventListener("click", () => moveCarrossel("prev"));
    nextButton.addEventListener("click", () => moveCarrossel("next"));

  } catch (error) {
    console.error("Erro ao carregar os eventos:", error);
  }
});

 