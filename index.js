// !Starting Code - All cats on cards, on page
const catsUrl = "http://localhost:3000/cats"
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

  const catName = document.createElement('h2');
  catName.textContent = cat.name;

  const image = document.createElement('img');
  image.src = cat.url;
  image.alt = cat.name;

  const age = document.createElement('p');
  age.textContent = `Age: ${cat.age} ${cat.age2}`;

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
// * Anne - create filter for age
const dropdownAge = document.getElementById('dropdown-age');
let selectAge = '';

dropdownAge.addEventListener('change', (e) => {
  console.log(e.target.value)
  selectAge = e.target.value;
  let filteredCats = catsArr.filter(cat => whatAge(cat) === selectAge);
  // filterByAge(selectAge)
  renderCats(filteredCats);
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
  let filterCat = catsArr.filter(cat => isCompanion(cat) === selectCompanion);
  renderCats(filterCat);
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
  let catFilter = catsArr.filter(cat => isFemale(cat) === selectGender);
  renderCats(catFilter);
});

function isFemale(cat) {
  if (cat.gender === "FS"){
    return "female";
  } else {
    return "male";
  }
}