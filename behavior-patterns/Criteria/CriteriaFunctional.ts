import { Person } from "./Person"

const person1: Person = {
  gender: 'Male', 
  job: 'Programmer', 
  lastname: 'Lopez', 
  married: false, 
  name: 'Oscar'
}

const person2: Person = {
  gender: 'Female', 
  job: 'Seller', 
  lastname: 'Acosta', 
  married: false, 
  name: 'Natalia'
}

const person3: Person = {
  gender: 'Male', 
  job: 'Inspector', 
  lastname: 'Cruz', 
  married: true, 
  name: 'Mane'
}

const person4: Person = {
  gender: 'Female', 
  job: 'Manager', 
  lastname: 'Veloz', 
  married: false, 
  name: 'Danno'
}

const person5: Person = {
  gender: 'Male', 
  job: 'Almacenist', 
  lastname: 'Mendoza', 
  married: false, 
  name: 'Miguel'
}


const persons: Person[] = [
  person1, 
  person2, 
  person3, 
  person4, 
  person5
] 

type Criteria = (person: Person) => boolean

const maleFilter: Criteria = person => person.gender === 'Male' 
const femaleFilter: Criteria = person => person.gender === 'Female'
const singleFilter: Criteria = person => !person.married
const marriedFilter: Criteria = person => person.married
const singleMaleFilter: Criteria = person => maleFilter(person) && singleFilter(person)
const marriedMaleFilter: Criteria = person => maleFilter(person) && marriedFilter(person)
const singleOfFemaleFilter: Criteria = person => singleFilter(person) || femaleFilter(person)

const males = persons.filter(maleFilter)
const females = persons.filter(femaleFilter)
const singles = persons.filter(singleFilter)
const marrieds = persons.filter(marriedFilter)
const singleMales = persons.filter(singleMaleFilter)
const marriedMales = persons.filter(marriedMaleFilter)
const singleOrFemales = persons.filter(singleOfFemaleFilter)

console.log({
  males, 
  females, 
  persons, 
  singles, 
  marrieds, 
  singleMales, 
  marriedMales, 
  singleOrFemales
});