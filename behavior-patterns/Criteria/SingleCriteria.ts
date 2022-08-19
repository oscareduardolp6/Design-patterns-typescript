import { Criteria } from "./Criteria";
import { Person } from "./Person";

export class SingleCriteria implements Criteria {
  meetCriteria(list: Person[]): Person[] {
    return list.filter(person => !person.married)
  }
}