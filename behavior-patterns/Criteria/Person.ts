type Gender = 'Male' | 'Female'

export interface Person {
  name: string
  lastname: string 
  gender: Gender 
  married: boolean 
  job: string
}