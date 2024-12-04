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

    function moveCarrossel(direction) {
      const scrollAmount = carrossel.clientWidth / 3;
      var i = 0;
      var valorAtual = i;

      if (direction === "next") {
        carrossel.scrollLeft += scrollAmount;
        valorAtual = valorAtual + 1;
      } else if (direction === "prev") {
        carrossel.scrollLeft -= scrollAmount;
        valorAtual = valorAtual - 1;
      }
      console.log(valorAtual);
    }

    function changeButton(scrollAmount) {
      if (scrollAmount > 0) {
      }
    }

    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    prevButton.addEventListener("click", () => moveCarrossel("prev"));
    nextButton.addEventListener("click", () => moveCarrossel("next"));
  } catch (error) {
    console.error("Erro ao carregar os eventos:", error);
  }

  function hover() {}
});
