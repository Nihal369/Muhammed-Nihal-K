const card = document.getElementById("home-container-1");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
      card.classList.toggle("expanded");
      btn.textContent = card.classList.contains("expanded") ? "Show Less" : "Show More";
    });