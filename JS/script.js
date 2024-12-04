document.addEventListener("DOMContentLoaded", async () => {
  const carrossel = document.getElementById("carrossel-eventinhos");

  try {
    const response = await fetch("http://localhost:5000/api/events");
    const events = await response.json();

    carrossel.innerHTML = "";

    events.forEach((event) => {
      const eventElement = document.createElement("div");

      eventElement.innerHTML = `
      <a href="" class="eventinho">
        <img src="http://localhost:5000${event.image}" alt="${event.name}">
        <div id="descricao-eventinho">
          <span class="data">${event.date}</span>
          <p>${event.name}</p>
          <span>${event.location}</span>
        </div>
      </a>
      `;
      carrossel.appendChild(eventElement);
    });

    
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    prevButton.addEventListener("click", () => moveCarrossel("prev"));
    nextButton.addEventListener("click", () => moveCarrossel("next"));

    carrossel.addEventListener("scroll", () => {
      const atEnd =
        carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth;
      if (atEnd) {
        verMaisButton.style.display = "block";
      } else {
        verMaisButton.style.display = "none";
      }
    });
  } catch (error) {
    console.error("Erro ao carregar os eventos:", error);
  }

  function hover() {}
});


document.addEventListener("DOMContentLoaded", async () => {
  const mainEventContainer = document.getElementById("main-events");  

  try {
 
    const response = await fetch("http://localhost:5000/api/main-events");
    const mainEvents = await response.json();
 
    const mainEventImage = document.getElementById("imagem-destaque");
    const mainEventDescription = document.getElementById("descricao-destaque");

    if (mainEvents && mainEvents.length > 0) {
      const firstEvent = mainEvents[0];  
      mainEventImage.src = `http://localhost:5000${firstEvent.image}`;
      mainEventDescription.innerHTML = `
        <h2>${firstEvent.name}</h2>
        <span>${firstEvent.date}</span>
      `;
    }
  } catch (error) {
    console.error("Erro ao carregar os eventos principais:", error);
  }
});