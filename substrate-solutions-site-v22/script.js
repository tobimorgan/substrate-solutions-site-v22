const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

// Auto-scroll project carousel
const projectGrid = document.querySelector(".project-grid");
if (projectGrid) {
  let scrollAmount = 0;
  const scrollStep = 420 + 28; // project width + gap
  
  setInterval(() => {
    scrollAmount += scrollStep;
    projectGrid.scrollBy({ left: scrollStep, behavior: "smooth" });
    
    // Reset scroll position when reaching the end
    if (scrollAmount >= projectGrid.scrollWidth - projectGrid.clientWidth) {
      scrollAmount = 0;
      setTimeout(() => {
        projectGrid.scrollLeft = 0;
      }, 1000);
    }
  }, 4000); // Scroll every 4 seconds
}
