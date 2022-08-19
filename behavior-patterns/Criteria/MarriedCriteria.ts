import { Criteria } from "./Criteria";
import { Person } from "./Person";

export class MarriedFilter implements Criteria {
  meetCriteria(list: Person[]): Person[] {
    return list.filter(person => person.married)
  }
}