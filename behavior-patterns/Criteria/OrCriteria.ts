import { Criteria } from "./Criteria";
import { Person } from "./Person";

export class OrCriteria implements Criteria {

  constructor(
    private criteria: Criteria, 
    private otherCriteria: Criteria 
  ) {}

  meetCriteria(list: Person[]): Person[] {
    const firstCriteriaPersons = this.criteria.meetCriteria(list)
    const secondCriteriaPersons = this.otherCriteria.meetCriteria(list)
    for(const person of secondCriteriaPersons) {
      if(!firstCriteriaPersons.includes(person)) {
        firstCriteriaPersons.push(person); 
      }
    }
    return firstCriteriaPersons
  }

}