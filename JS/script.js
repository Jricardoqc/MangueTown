document.addEventListener("DOMContentLoaded", async () => {
  const carrossel = document.getElementById("carrossel-eventinhos");
  const dateFilter = document.getElementById("dateFilter");
  const searchInput = document.getElementById("txtBusca");

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

    function moveCarrossel(direction) {
      const scrollAmount = carrossel.clientWidth / 3;

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
  }

  function formatDate(dateString) {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options).toUpperCase();
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

  searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredEvents = allEvents.filter((event) =>
      event.name.toLowerCase().includes(searchQuery)
    );
    displayEvents(filteredEvents);
  });

  loadEvents();

  const absoluteElement = document.getElementById("comprar-cigarro");

  // Função que verifica a posição da rolagem e oculta o elemento
  function handleScroll() {
    const scrollY = window.scrollY; // Obtém a posição atual da barra de rolagem
    if (scrollY > 100) {
      // Oculta o elemento quando o scroll for maior que 300px
      absoluteElement.classList.add("sumir"); // Adiciona a classe que oculta suavemente
    } else {
      absoluteElement.classList.remove("sumir"); // Remove a classe, tornando o elemento visível
    }
  }

  // Adiciona o evento de scroll na janela
  window.addEventListener("scroll", handleScroll);
});
