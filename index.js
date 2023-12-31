
const catsUrl = "http://localhost:3000/cats";

let totalDonations = 0;

const cards = document.getElementById('cards');
let catsArr = [];

fetch(catsUrl)
  .then(resp => resp.json())
  .then(cats => {
    catsArr = cats
    renderCats(catsArr);
  });

function renderCats(cats) {
  cards.innerHTML = "";
  cats.forEach(cat => {
    const card = createCatCard(cat);
    cards.appendChild(card);
  });
}

function createCatCard(cat) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', cat.id);

  const catName = document.createElement('h2');
  catName.textContent = cat.name;

  const image = document.createElement('img');
  image.src = cat.url;
  image.alt = cat.name;
  image.className = 'image'
  image.setAttribute('id', cat.id)

  const age = document.createElement('p');
  age.textContent = `Age: ${cat.age} ${cat.age2}`;

  const breed = document.createElement('p');
  breed.textContent = `Breed: ${cat.breed}`;

  const gender = document.createElement('p');
  gender.textContent = `Gender: ${cat.gender}`;

  const donations = document.createElement('p');
  donations.classList.add('donations');
  donations.textContent = `Donations: $${cat.donations}`;

  const adoptButton = document.createElement('button');
  adoptButton.textContent = 'ADOPT';
  adoptButton.classList.add('button');
  adoptButton.addEventListener('click', () => handleAdopt(cat));

  const donateButton = document.createElement('button');
  donateButton.textContent = 'DONATE $10';
  donateButton.classList.add('button');
  donateButton.addEventListener('click', () => handleDonate(cat));

  image.addEventListener('mouseover', (e) => {
    if (e.target.className === 'image') {
      const catId = e.target.getAttribute('id');
      const kitty = catsArr.find(cat => cat.id == catId);
      console.log(e.target.classList);
      openModal(kitty)
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  });

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
//! Modal attempt 3 helpers
const modal = document.getElementById('cat-modal');
const modalContent = document.getElementById('content');
const closeBtn = document.querySelector('.close')

function openModal(cat) {
  if (cat) {
    modal.style.display = 'block';
    modalContent.innerHTML = `
      <h3>${cat.name}</h3>
      <p>${cat.age} ${cat.age2} old, ${cat.gender}, ${cat.breed}</p>
      <p>Companion Status: ${cat['companion-status']}</p>
      <p>Personality: ${cat.personality}</p>
    `;
  } else {
    console.error('Cat info is undefined')
  }
  
}
function closeModal() {
  modal.style.display = 'none';
}

//* Anne - update to link all dropdowns
let filteredCats;
function filteredFilters() {
  filteredCats = catsArr.slice();
  if (selectAge){
    filteredCats = filteredCats.filter(cat => whatAge(cat) === selectAge);
  }
  if (selectCompanion){
    filteredCats = filteredCats.filter(cat => isCompanion(cat) === selectCompanion);
  }
  if (selectGender){
    filteredCats = filteredCats.filter(cat => isFemale(cat) === selectGender);
  }
  if (filteredCats.length === 0) {
    alert("No cats fit that description! Please try again!")
  }
  renderCats(filteredCats);
}

// * Anne - create filter for age
const dropdownAge = document.getElementById('dropdown-age');
let selectAge = '';

dropdownAge.addEventListener('change', (e) => {
  selectAge = e.target.value;
  filteredFilters();
})
//  I need a function that will return the values of kitten,
//   adult, or senior, that I can pass into the filter()
//   so it matches the e.target.value when selecting dropdown
function whatAge(cat) {
  if (cat.age2 === "months"){
    return "kitten"
  }
  if (cat.age2 === "years" && cat.age < 9){
    return "adult"
  }
  if (cat.age2 === "years" && cat.age >= 9){
    return "senior"
  }
}

// Repeat previous steps for Companion/Working status
const dropdownComp = document.getElementById('dropdown-companion');
let selectCompanion = '';

dropdownComp.addEventListener('change', (e) => {
  selectCompanion = e.target.value;
  filteredFilters();
});

function isCompanion(cat){
  if (cat['companion-status'] === "working"){
    return "working";
  } else {
    return "companion";
  }
}

// Repeat for gender choice
const dropdownGender = document.getElementById('dropdown-gender');
let selectGender =  '';

dropdownGender.addEventListener('change', (e) => {
  selectGender = e.target.value;
  filteredFilters();
});

function isFemale(cat) {
  if (cat.gender === "FS"){
    return "female";
  } else {
    return "male";
  }
}


function handleAdopt(cat) {
  const conformationMessage = `CONGRATULATIONS!! You have adopted ${cat.name}!!`;
  alert(conformationMessage);

  const cardRemoval = document.getElementById(`${cat.id}`);
  cardRemoval.remove();

  triggerConfetti();
}

function triggerConfetti() {
  const confettiConfig = {
    particleCount: 1000,
    spread: 100,
    origin: { y: 0.6},
  };
  
  confetti(confettiConfig);

}

function handleDonate(cat) {
  cat.donations = parseInt(cat.donations) + 10;
  const card = document.getElementById(`${cat.id}`);
  const donationsElement = card.querySelector('.donations');
  donationsElement.textContent = `Donations: $${cat.donations}`;
}

