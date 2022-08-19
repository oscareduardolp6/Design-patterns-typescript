import { Person } from "./Person";

export interface Criteria {
  meetCriteria(list: Person[]): Person[] 
}