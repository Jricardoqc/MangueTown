document.addEventListener("DOMContentLoaded", async () => {
  const carrossel = document.getElementById("carrossel-eventinhos");
  const dateFilter = document.getElementById("dateFilter");

  let allEvents = [];
 
  async function loadEvents() {
    try {
      const response = await fetch("http://localhost:5000/api/events");
      allEvents = await response.json();  
      displayEvents(allEvents);
    } catch (error) {
      console.error("Erro ao carregar os eventos:", error);
    }
  }
 
  function displayEvents(events) {
    carrossel.innerHTML = "";  
    if (events.length === 0) {
      carrossel.innerHTML = "<p>Nenhum evento encontrado para esta data.</p>";
      return;
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
  }
 
  function formatDate(dateString) {
    const options = { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", options).toUpperCase();
  }
 
  dateFilter.addEventListener("change", () => {
    const selectedDate = dateFilter.value; 
    if (selectedDate) {
      const filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date).toISOString().split("T")[0];  
        return eventDate === selectedDate;
      });
      displayEvents(filteredEvents);
    } else {
      displayEvents(allEvents); 
    }
  });
 
  loadEvents();
});