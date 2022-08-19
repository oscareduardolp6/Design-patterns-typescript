import { Criteria } from "./Criteria";
import { Person } from "./Person";

export class AndCriteria implements Criteria {

  constructor(
    private firstCriteria: Criteria, 
    private secondCriteria: Criteria) { }

  meetCriteria(list: Person[]): Person[] {
    const firstCriteriaPersons = this.firstCriteria.meetCriteria(list); 
    const secondCriteriaPersons = this.secondCriteria.meetCriteria(firstCriteriaPersons); 
    return secondCriteriaPersons 
  }

}