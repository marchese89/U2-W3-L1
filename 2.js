const form = document.getElementById("pet-form");

const pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(pet) {
    if (this.ownerName === pet.ownerName) {
      return true;
    }
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  document.getElementById("petName").value = "";
  document.getElementById("ownerName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";
  const newPet = new Pet(petName, ownerName, species, breed);

  pets.push(newPet);

  renderList();
});

function renderList() {
  const petList = document.getElementById("pet-list");
  petList.innerHTML = "";
  pets.forEach((e, i) => {
    let red = false;
    for (let x = 0; x < pets.length; x++) {
      if (pets[x].sameOwner(e) && x !== i) {
        red = true;
      }
    }
    const color = red ? "text-danger" : "";
    petList.innerHTML =
      petList.innerHTML +
      `
        <div class="row ${color}">
        <div class="col-3">
        ${e.petName}
        </div>
        <div class="col-3">
        ${e.ownerName}
        </div>
        <div class="col-3">
        ${e.species}
        </div>
        <div class="col-3">
        ${e.breed}
        </div>
        </div>`;
  });
}

const pet1 = new Pet("PetName1", "PetOwner1", "PetSpecies1", "PetBreed1");
const pet2 = new Pet("PetName2", "PetOwner", "PetSpecies2", "PetBreed2");

if (pet1.sameOwner(pet2)) {
  console.log("i due animali hanno lo stesso padrone");
} else {
  console.log("i due animali NON hanno lo stesso padrone");
}

renderList();
