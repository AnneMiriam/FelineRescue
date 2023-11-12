const catsUrl = "http://localhost:3000/cats";

let totalDonations = 0;

const cards = document.getElementById('cards');

fetch(catsUrl)
  .then(resp => resp.json())
  .then(cats => {
    renderCats(cats);
  });

function renderCats(cats) {
  cats.forEach(cat => {
    const card = createCatCard(cat);
    cards.appendChild(card);
  });
}

function createCatCard(cat) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-cat-id', cat.id);

  const catName = document.createElement('h2');
  catName.textContent = cat.name;

  const image = document.createElement('img');
  image.src = cat.url;
  image.alt = cat.name;

  const age = document.createElement('p');
  age.textContent = `Age: ${cat.age}`;

  const breed = document.createElement('p');
  breed.textContent = `Breed: ${cat.breed}`;

  const gender = document.createElement('p');
  gender.textContent = `Gender: ${cat.gender}`;

  const donations = document.createElement('p');
  donations.classList.add('donations');
  donations.textContent = `Donations: ${cat.donations}`;

  const adoptButton = document.createElement('button');
  adoptButton.textContent = 'ADOPT';
  adoptButton.classList.add('button');
  adoptButton.addEventListener('click', () => handleAdopt(cat));

  const donateButton = document.createElement('button');
  donateButton.textContent = 'DONATE $10';
  donateButton.classList.add('button');
  donateButton.addEventListener('click', () => handleDonate(cat));

  card.appendChild(catName);
  card.appendChild(image);
  card.appendChild(age);
  card.appendChild(breed);
  card.appendChild(gender);
  card.appendChild(donations);
  card.appendChild(adoptButton);
  card.appendChild(donateButton);

  return card;
}

function handleAdopt(cat) {
  console.log(`Adopting ${cat.name}!`);
}

function handleDonate(cat) {
  cat.donations = parseInt(cat.donations) + 10;
  const card = document.querySelector(`[data-cat-id="${cat.id}"]`);
  const donationsElement = card.querySelector('.donations');
  donationsElement.textContent = `Donations: ${cat.donations}`;
}
