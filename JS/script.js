document.addEventListener("DOMContentLoaded", async () => {
  const carrossel = document.getElementById("carrossel-eventinhos");

  const imagesContainer = document.querySelector(".imagem-destaque");
  const images = document.querySelectorAll(".imagem-destaque img");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let indiceAtual = 0;

  // Função para atualizar o deslocamento do carrossel
  function updateCarousel() {
    const width = images[0].clientWidth;
    imagesContainer.style.transform = `translateX(-${indiceAtual * width}px)`;
  }

  // Evento para botão "Próximo"
  nextButton.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % images.length; // Volta para o início no final
    updateCarousel();
  });

  // Evento para botão "Anterior"
  prevButton.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + images.length) % images.length; // Volta para o fim se for o início
    updateCarousel();
  });
  
  // Ajusta o carrossel quando a janela é redimensionada
  window.addEventListener("resize", updateCarousel);

  const verMaisButton = document.createElement("div");

  verMaisButton.id = "ver-mais-btn";
  verMaisButton.textContent = "Ver mais eventos";
  verMaisButton.style.display = "none";
  verMaisButton.style.marginTop = "20px";
  verMaisButton.addEventListener("click", () => {
    window.location.href = "../HTML/events.html";
  });

  carrossel.parentElement.appendChild(verMaisButton);

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
