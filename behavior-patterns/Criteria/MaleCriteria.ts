import { Criteria } from "./Criteria";
import { Person } from "./Person";

export class MaleCriteria implements Criteria {
  meetCriteria(list: Person[]): Person[] {
    return list.filter(person => person.gender === 'Male')
  }
}