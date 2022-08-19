import { Criteria } from "./Criteria";
import { Person } from "./Person";

export class FemaleCriteria implements Criteria {
  meetCriteria(list: Person[]): Person[] {
    return list.filter(person => person.gender === 'Male') 
  }
}

const resolve = () => ['Cualquiercosa', null]

let [val, err] = resolve()


// [val, err] = resolve()