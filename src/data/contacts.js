// Funkcija za stvaranje jedinstvenog identifikatora (skoro pa jedinstven, biramo nasumični broj od 0 do 10000000)
function getRandomNumber() {
  return Math.floor(Math.random() * 10000000);
}

// Novi tip podatka koji predstavlja kontakt
export function Contact(
  name,
  lastName,
  dateOfBirth,
  number,
  address,
  city,
  category
) {
  this.name = name;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.number = number;
  this.address = address;
  this.city = city;
  this.category = category;

  // Pri kreiranju osobe svaka osoba dobije svoj jedinstveni identifikator
  this.id = getRandomNumber();
}

// export const contacts = [
//   new Contact(
//     "Ivo",
//     "ivić",
//     "1995-10-16",
//     "156181554",
//     "Moja Kuca 1",
//     "Split",
//     "red"
//   ),
//   new Contact(
//     "Ante",
//     "Lukač",
//     "1989-03-23",
//     "15132131554",
//     "Moja Kuca 2",
//     "Split",
//     "green"
//   ),
//   new Contact(
//     "Josip",
//     "Horvat",
//     "1968-08-30",
//     "153231554",
//     "Moja Kuca 3",
//     "Zagreb",
//     "green"
//   ),
//   new Contact(
//     "Luka",
//     "Horvat",
//     "1993-04-05",
//     "15313554",
//     "Moja Kuca 4",
//     "Osjek",
//     "red"
//   ),
//   new Contact(
//     "mate",
//     "Horvat",
//     "2001-03-07",
//     "1561232554",
//     "Moja Kuca 5",
//     "Split",
//     "purple"
//   ),
// ];
