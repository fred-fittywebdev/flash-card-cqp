// Données des cartes (à remplir avec vos propres données)
const cards = [
	{
		name: "Maria",
		image: "Marie.jpg",
		profile: "Que pouvons-nous lui proposer?",
		hiddenText: "Plan d'entraînement suggéré",
		hiddenImage: "maria_text.jpg",
	},
	{
		name: "Pierre",
		image: "Pierre.jpg",
		profile: "Que pouvons-nous lui proposer?",
		hiddenText: "Plan d'entraînement suggéré",
		hiddenImage: "pierre_text.jpg",
	},
	{
		name: "Jean",
		image: "Jean.jpg",
		profile: "Que pouvons-nous lui proposer?",
		hiddenText: "Plan d'entraînement suggéré",
		hiddenImage: "jean_text.jpg",
	},
	{
		name: "Sarah",
		image: "Sarah.jpg",
		profile: "Que pouvons-nous lui proposer?",
		hiddenText: "Plan d'entraînement suggéré",
		hiddenImage: "sarah_text.jpg",
	},
	// Ajoutez d'autres cartes ici
];

const showCardBtn = document.getElementById("showCardBtn");
const cardContainer = document.getElementById("cardContainer");
const cardImage = document.getElementById("cardImage");
const cardName = document.getElementById("cardName");
const cardProfile = document.getElementById("cardProfile");
const hiddenTextContainer = document.getElementById("hiddenTextContainer");
const revealTextBtn = document.getElementById("revealTextBtn");
const hiddenText = document.getElementById("hiddenText");
const IMAGE_PATH = "./images/";

let currentCard;

showCardBtn.addEventListener("click", showRandomCard);
revealTextBtn.addEventListener("click", revealHiddenText);

function showRandomCard() {
	currentCard = cards[Math.floor(Math.random() * cards.length)];
	cardImage.src = IMAGE_PATH + currentCard.image;
	cardImage.alt = `Carte de ${currentCard.name}`;
	cardName.textContent = currentCard.name;
	cardProfile.textContent = currentCard.profile;

	cardContainer.classList.remove("hidden");
	hiddenTextContainer.classList.remove("hidden");
	revealTextBtn.disabled = true;
	hiddenText.classList.add("hidden");

	setTimeout(() => {
		revealTextBtn.disabled = false;
	}, 60000); // 10 minutes en millisecondes
}

function revealHiddenText() {
	hiddenText.textContent = currentCard.hiddenText;
	const hiddenImage = document.createElement("img");
	hiddenImage.src = IMAGE_PATH + currentCard.hiddenImage;
	hiddenImage.alt = `Texte caché pour ${currentCard.name}`;
	hiddenText.appendChild(hiddenImage);
	hiddenText.classList.remove("hidden");
	revealTextBtn.disabled = true;
}
