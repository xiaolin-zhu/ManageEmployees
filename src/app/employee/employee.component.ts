import { Component, OnInit } from '@angular/core';

import { Employee } from '../interface/Employee'
import { Employees } from '../mockData/mock-employee';
import { EmployeeService } from '../service/employee.service';
import { MessageService } from '../service/message.service';
import { QuestionService } from '../service/question.service';
import { QuestionBase } from '../Common/question-control/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:  [QuestionService]
})
export class EmployeeComponent implements OnInit {
  employees: Employee[]
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private employeeService: EmployeeService,service: QuestionService) {
    this.questions$ = service.getQuestions();
   }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(employees => this.employees = employees);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.addEmployee({ Name:name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

/*   addItem(newItem) {
    this.employeeService.addEmployee(newItem as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  } */

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }

}
