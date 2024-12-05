document.addEventListener("DOMContentLoaded", () => {
    const carrossel = document.querySelector(".events-carrossel");
    const prevButton = document.querySelector("#prev-btn");
    const nextButton = document.querySelector("#next-btn");
   
    const scrollAmount = 300;  
   
    function moveCarrossel(direction) {
      if (direction === "next") {
        carrossel.scrollLeft += scrollAmount; 
      } else if (direction === "prev") {
        carrossel.scrollLeft -= scrollAmount;  
      }
    }
   
    prevButton.addEventListener("click", () => moveCarrossel("prev"));
    nextButton.addEventListener("click", () => moveCarrossel("next"));
  });