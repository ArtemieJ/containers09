// Script pentru a schimba textul din titlu cand se face clic pe el
document.querySelector("h1").addEventListener("click", function() {
    this.textContent = "Ai dat clic pe titlu!";
});
