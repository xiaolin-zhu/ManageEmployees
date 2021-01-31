import { Component, OnInit } from '@angular/core';
import { Employee } from '../interface/Employee'
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees: Employee[]

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(employees => this.employees = employees.slice(1, 5));
  }

}
