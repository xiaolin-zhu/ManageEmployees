import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../interface/Employee'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const employees = [
      {
        id: 1,
        Name: 'Tina',
        Age: 30,
        Sex: 'female',
        Level: 6,
        IsAdmin: true
      },
      {
          id: 2,
          Name: 'Bob',
          Age: 25,
          Sex: 'male',
          Level: 7,
          IsAdmin: false
      },
      {
          id: 3,
          Name: 'Lily',
          Age: 24,
          Sex: 'female',
          Level: 8,
          IsAdmin: false
      },
      {
          id: 4,
          Name: 'Tom',
          Age: 26,
          Sex: 'male',
          Level: 9,
          IsAdmin: false
      },
      {
          id: 5,
          Name: 'Jack',
          Age: 28,
          Sex: 'male',
          Level: 10,
          IsAdmin: false
      }
    ];
    return {employees};
  }
   // Overrides the genId method to ensure that a hero always has an id.
  // If the employees array is empty,
  // the method below returns the initial number (11).
  // if the employees array is not empty, the method below returns the highest
  // employee id + 1.
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 1;
  }
}
