const catsUrl = "http://localhost:3000/cats"

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

  card.appendChild(catName);
  card.appendChild(image);
  card.appendChild(age);
  card.appendChild(breed);
  card.appendChild(gender);

  return card;
}
