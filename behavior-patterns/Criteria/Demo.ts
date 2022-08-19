import { AndCriteria } from "./AndCriteria";
import { FemaleCriteria } from "./FemaleCriteria";
import { MaleCriteria } from "./MaleCriteria";
import { MarriedFilter } from "./MarriedCriteria";
import { OrCriteria } from "./OrCriteria";
import { Person } from "./Person";
import { SingleCriteria } from "./SingleCriteria";

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

const maleFilter = new MaleCriteria()
const femaleFilter = new FemaleCriteria()
const singleFilter = new SingleCriteria()
const marriedFilter = new MarriedFilter()
const singleMaleFilter = new AndCriteria(singleFilter, maleFilter)
const marriedMaleFilter = new AndCriteria(marriedFilter, maleFilter)
const singleOrFemaleFilter = new OrCriteria(singleFilter, femaleFilter)

const males = maleFilter.meetCriteria(persons)
const females = femaleFilter.meetCriteria(persons)
const singles = singleFilter.meetCriteria(persons)
const marrieds = marriedFilter.meetCriteria(persons)
const singleMales = singleMaleFilter.meetCriteria(persons)
const marriedMales = marriedMaleFilter.meetCriteria(persons)
const singleOrFemales = singleOrFemaleFilter.meetCriteria(persons)

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


