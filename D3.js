const footerSpan = document.getElementById("current-year");
const year = new Date().getFullYear();
footerSpan.innerText = year;

const pageForm = document.getElementById("new-contact-form");
pageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Card con dati");

  const nameInput = document.getElementById("name");

  const nameValue = {
    name: nameInput.value,
  };
  console.log("Utente", nameValue);

  const card = document.createElement("div");
  card.classList.add("utent-card");

  card.innerHTML = `
    <p onclick="lineThrough(event)">${nameValue.name} </p>
    <button onclick="deleteCard(event)">ELIMINA</button>`;

  const cardContainer = document.getElementById("saved-utents");
  cardContainer.appendChild(card);

  nameInput.value = "";
});
const deleteCard = function (e) {
  console.log("ELIMINA", e.target.parentElement);

  const pressedButton = e.target;
  const cardToRemove = pressedButton.parentElement;
  cardToRemove.remove();
};

const lineThrough = function (e) {
  console.log("Completato", e.target.parentElement);
  const pressP = e.target;
  const trough = pressP.parentElement;
  trough.classList.add("testo-barrato");
};
