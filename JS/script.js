document.addEventListener("DOMContentLoaded", async () => {
  const carrossel = document.getElementById("carrossel-eventinhos");

  try {
 
    const response = await fetch("http://localhost:5000/api/events");
    const events = await response.json();
 
    carrossel.innerHTML = "";
 
    events.forEach((event) => {
      
      const eventElement = document.createElement("div");
      eventElement.classList.add("eventinho");

      eventElement.innerHTML = `
        <img src="${event.image}" alt="${event.name}">
        <span class="data">${event.date}</span>
        <p>${event.name}</p>
        <span>${event.location}</span>
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
  } catch (error) {
    console.error("Erro ao carregar os eventos:", error);
  }

  function hover() {
    
  }
});