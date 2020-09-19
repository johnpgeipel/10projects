const TOGGLE = document.getElementById("toggle");

TOGGLE.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
    }
)